package com.shoalter.grpcreactchatroom.service;

import com.shoalter.grpcreactchatroom.dto.IdentityStreamObserver;
import com.shoalter.grpcreactchatroom.obersver.ChannelObserver;
import com.shoalter.push.*;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@GrpcService
public class PushService extends PushServiceGrpc.PushServiceImplBase {

    static final Map<String, List<IdentityStreamObserver<ChatRoomStreamReply>>> streamObserverMap = new HashMap<>();

    @Autowired
    private ChannelObserver channelObserver;

    @Override
    public void joinChatRoomStream(com.shoalter.push.ChatRoomStreamRequest request,
                               io.grpc.stub.StreamObserver<com.shoalter.push.ChatRoomStreamReply> responseObserver) {
        channelObserver.subscribe(request.getChatroomID(), request.getUserID(), responseObserver);
    }

    @Override
    public void closeChatRoom(com.shoalter.push.CloseChatRoomRequest request,
                              io.grpc.stub.StreamObserver<com.shoalter.push.CloseChatRoomReply> responseObserver) {
        channelObserver.closeChannel(request.getChatroomID());
        CloseChatRoomReply reply = CloseChatRoomReply.newBuilder()
                .setSuccess(Success.newBuilder()
                        .setIsSuccess(true)
                        .build())
                .build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void unsubscribeStream(com.shoalter.push.UnsubscribeStreamRequest request,
                                  io.grpc.stub.StreamObserver<com.shoalter.push.UnsubscribeStreamReply> responseObserver) {

        channelObserver.unsubscribe(request.getChatroomID(), request.getUserID());
        UnsubscribeStreamReply reply = UnsubscribeStreamReply.newBuilder()
                .setSuccess(Success.newBuilder()
                        .setIsSuccess(true)
                        .build())
                .build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

}
