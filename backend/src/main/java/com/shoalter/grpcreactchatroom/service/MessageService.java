package com.shoalter.grpcreactchatroom.service;

import com.shoalter.grpcreactchatroom.dao.CassandraMessageDao;
import com.shoalter.grpcreactchatroom.entity.Message;
import com.shoalter.grpcreactchatroom.obersver.ChannelObserver;
import com.shoalter.message.MessageServiceGrpc;
import com.shoalter.message.SendMessageReply;
import com.shoalter.push.PushMessage;
import net.devh.boot.grpc.server.service.GrpcService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;

import java.util.Date;

@GrpcService
public class MessageService extends MessageServiceGrpc.MessageServiceImplBase {

    private Logger logger = LoggerFactory.getLogger(MessageService.class);
    private int runningId = 0;

    @Autowired
    private ChannelObserver channelObserver;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private ChannelTopic channelTopic;

    @Autowired
    private RedisMessageService redisMessageService;

    @Autowired
    private CassandraMessageDao cassandraMessageRecordDao;

    @Override
    public void sendMessage(com.shoalter.message.SendMessageRequest request,
                            io.grpc.stub.StreamObserver<com.shoalter.message.SendMessageReply> responseObserver) {
        long createTime = new Date().getTime();
        com.shoalter.message.Message message = com.shoalter.message.Message.newBuilder()
                .setId(Integer.toString(runningId))
                .setChatroomID(request.getChatroomID())
                .setUserID(request.getUserID())
                .setContent(request.getContent())
                .setCreateTime(createTime)
                .build();

        SendMessageReply reply = SendMessageReply.newBuilder().setMessage(message).build();

        responseObserver.onNext(reply);
        responseObserver.onCompleted();

        //server收到消息後也需要將訊息發送給有訂閱這個頻道的user

        PushMessage pushMessage = PushMessage.newBuilder()
                .setId(Integer.toString(runningId))
                .setChatroomID(request.getChatroomID())
                .setUserID(request.getUserID())
                .setContent(request.getContent())
                .setCreateTime(createTime)
                .build();

        channelObserver.broadcast(request.getChatroomID(), pushMessage);
        runningId += 1;

//        存到redis
        Message messageToStore = new Message();
        messageToStore.setMessageID(pushMessage.getId());
        messageToStore.setChatroomID(pushMessage.getChatroomID());
        messageToStore.setUserID(pushMessage.getUserID());
        messageToStore.setContent(pushMessage.getContent());
        messageToStore.setCreateTime(pushMessage.getCreateTime());

        redisTemplate.convertAndSend(channelTopic.getTopic(), messageToStore.toString());
        redisMessageService.save(messageToStore);

//        存到cassandra
        cassandraMessageRecordDao.save(messageToStore);

    }

}
