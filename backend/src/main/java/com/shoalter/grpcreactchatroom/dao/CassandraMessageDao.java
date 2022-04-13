package com.shoalter.grpcreactchatroom.dao;

import com.shoalter.grpcreactchatroom.entity.Message;
import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CassandraMessageDao extends CassandraRepository<Message, String> {


    @Query("select * from message where chatroomid=?0 ALLOW FILTERING")
    @AllowFiltering
    public List<Message> getMessageByChatroomID(String chatroomID);
}
