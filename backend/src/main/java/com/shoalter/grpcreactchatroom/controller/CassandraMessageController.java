package com.shoalter.grpcreactchatroom.controller;

import com.shoalter.grpcreactchatroom.dao.CassandraMessageDao;
import com.shoalter.grpcreactchatroom.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CassandraMessageController {

    @Autowired
    private CassandraMessageDao cassandraMessageDao;

    @GetMapping("/message/cassandra/getMessageByChatroomID")
    public ResponseEntity<List<Message>> getMessageByChatroomID(@RequestParam String chatroomID) {
        List<Message> result = cassandraMessageDao.getMessageByChatroomID(chatroomID);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
