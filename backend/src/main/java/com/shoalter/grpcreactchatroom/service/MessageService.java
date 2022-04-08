package com.shoalter.grpcreactchatroom.service;

import com.shoalter.grpcreactchatroom.obersver.ChannelObserver;
import com.shoalter.message.Message;
import com.shoalter.message.MessageServiceGrpc;
import com.shoalter.message.SendMessageReply;
import com.shoalter.push.PushMessage;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

@GrpcService
public class MessageService extends MessageServiceGrpc.MessageServiceImplBase {

    private int runningId = 0;

    @Autowired
    private ChannelObserver channelObserver;

    @Override
    public void sendMessage(com.shoalter.message.SendMessageRequest request,
                            io.grpc.stub.StreamObserver<com.shoalter.message.SendMessageReply> responseObserver) {
        long createTime = new Date().getTime();
        Message message = Message.newBuilder()
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
    }

}
