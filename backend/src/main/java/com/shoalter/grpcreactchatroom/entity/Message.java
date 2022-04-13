package com.shoalter.grpcreactchatroom.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.io.Serializable;

@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message implements Serializable {

    @PrimaryKey
    private String messageID;
    @Column
    private String chatroomID;
    @Column
    private String userID;
    @Column
    private String content;
    @Column
    private long createTime;

}

