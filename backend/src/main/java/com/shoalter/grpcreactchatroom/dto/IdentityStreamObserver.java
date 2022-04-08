package com.shoalter.grpcreactchatroom.dto;

import io.grpc.stub.StreamObserver;

public class IdentityStreamObserver<T> {

    private String uuid;
    private StreamObserver<T> streamObserver;

    public IdentityStreamObserver(StreamObserver<T> streamObserver, String uuid) {
        this.streamObserver = streamObserver;
        this.uuid = uuid;
    }

    public StreamObserver<T> getStreamObserver() {
        return streamObserver;
    }

    public String getUuid() {
        return uuid;
    }
}
