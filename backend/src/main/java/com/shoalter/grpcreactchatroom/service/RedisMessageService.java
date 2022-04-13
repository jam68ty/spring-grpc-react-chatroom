package com.shoalter.grpcreactchatroom.service;

import com.shoalter.grpcreactchatroom.entity.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RedisMessageService {
    @Autowired
    private RedisTemplate<String, Message> redisTemplate;

    private final Logger logger = LoggerFactory.getLogger(RedisMessageService.class);

    public void save(Message message) {
        HashOperations<String, String, Message> hashOperations = redisTemplate.opsForHash();
        hashOperations.put(message.getChatroomID(), message.getUserID() + ":" + message.getMessageID(), message);
        logger.info("save to redis!");
    }

    public void getMessageByChatroom(String chatroomID) {
        HashOperations<String, String, Message> hashOperations = redisTemplate.opsForHash();
        Map<String, Message> message = hashOperations.entries(chatroomID);
        logger.info(String.valueOf(message));
    }


}
