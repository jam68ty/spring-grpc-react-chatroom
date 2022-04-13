package com.shoalter.grpcreactchatroom.receiver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.stereotype.Service;

@Service
public class Receiver implements MessageListener {
    Logger logger = LoggerFactory.getLogger(Receiver.class);
    @Override
    public void onMessage(Message message, byte[] bytes) {
        System.out.println(message);
        logger.info("Consumed event {}", message);
    }
}
