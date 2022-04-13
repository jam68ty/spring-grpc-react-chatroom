package com.shoalter.grpcreactchatroom.controller;


import com.shoalter.grpcreactchatroom.service.RedisMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedisMessageController {

    @Autowired
    private RedisMessageService redisMessageService;

    @GetMapping("/message/redis/getMessageByChatroomID")
    public void getMessageByChatroomID(@RequestParam String chatroomID) {
        redisMessageService.getMessageByChatroom(chatroomID);
    }



}
