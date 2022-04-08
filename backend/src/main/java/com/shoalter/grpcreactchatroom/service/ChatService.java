package com.shoalter.grpcreactchatroom.service;

import com.shoalter.chat.*;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;

import java.util.ArrayList;
import java.util.List;

@GrpcService
public class ChatService<T> extends ChatServiceGrpc.ChatServiceImplBase {

    private List<User> usersInChat = new ArrayList<>();
    private List<StreamObserver<ChatMessage>> observers = new ArrayList<>();

    @Override
    public void join(com.shoalter.chat.User request,
                     io.grpc.stub.StreamObserver<com.shoalter.chat.JoinResponse> responseObserver) {
        JoinResponse response;
        if (!usersInChat.contains(request)) {
            usersInChat.add(request);
            response = JoinResponse.newBuilder().setError(0).setMsg(request.getName() + " 成功加入").build();
            responseObserver.onNext(response);
            responseObserver.onCompleted();
        } else {
            response = JoinResponse.newBuilder().setError(1).setMsg(request.getName() + " 已存在聊天室").build();
            responseObserver.onNext(response);
        }
    }

    @Override
    public void getAllUsers(com.shoalter.chat.Empty request,
                            io.grpc.stub.StreamObserver<com.shoalter.chat.UserList> responseObserver) {
        UserList userList = UserList.newBuilder().addAllUsers(usersInChat).build();
        responseObserver.onNext(userList);
        responseObserver.onCompleted();
    }

    @Override
    public void sendMsg(com.shoalter.chat.ChatMessage request,
                        io.grpc.stub.StreamObserver<com.shoalter.chat.Empty> responseObserver) {

        observers.forEach((observer) -> observer.onNext(request));
        responseObserver.onNext(null);
    }

    //subscribe
    @Override
    public void receiveMsg(com.shoalter.chat.Empty request,
                           io.grpc.stub.StreamObserver<com.shoalter.chat.ChatMessage> responseObserver) {
        observers.add(responseObserver);
    }

}
