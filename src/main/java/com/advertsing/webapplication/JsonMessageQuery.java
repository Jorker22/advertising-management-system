package com.advertsing.webapplication;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageRepository;
import com.linecorp.bot.client.LineMessagingClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
public class JsonMessageQuery {
    @Autowired
    private MessageRepository messageRepository;


    public String jsonMessage(){
        List<Message> messageList = messageRepository.findByDeletedFalse();

        for (Message message: messageList
             ) {
            if(message.getSendDate() == "6/4/2020"){
                return message.getMessageJson();
            }
        }

        return null;
    }

}
