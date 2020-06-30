//package com.advertsing.webapplication.controller.linemanagement;
//
//import com.advertsing.webapplication.WebapplicationApplication;
//import com.advertsing.webapplication.entity.schoolmanagement.Student;
//import com.advertsing.webapplication.flexMessage.RestaurantFlexMessageSupplier;
//import com.advertsing.webapplication.helper.RichMenuHelper;
//import com.advertsing.webapplication.repository.broadcastmanagement.MessageRepository;
//import com.advertsing.webapplication.repository.schoolmanagement.StudentInfoRepository;
//import com.advertsing.webapplication.repository.schoolmanagement.StudentRepository;
//import com.google.common.io.ByteStreams;
//import com.linecorp.bot.client.LineMessagingClient;
//import com.linecorp.bot.client.MessageContentResponse;
//import com.linecorp.bot.model.ReplyMessage;
//import com.linecorp.bot.model.event.Event;
//import com.linecorp.bot.model.event.MessageEvent;
//import com.linecorp.bot.model.event.message.ImageMessageContent;
//import com.linecorp.bot.model.event.message.LocationMessageContent;
//import com.linecorp.bot.model.event.message.StickerMessageContent;
//import com.linecorp.bot.model.event.message.TextMessageContent;
//import com.linecorp.bot.model.message.*;
//import com.linecorp.bot.model.response.BotApiResponse;
//import com.linecorp.bot.spring.boot.annotation.EventMapping;
//import com.linecorp.bot.spring.boot.annotation.LineMessageHandler;
//
//import javafx.application.Application;
//import lombok.NonNull;
//import lombok.Value;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import java.io.IOException;
//import java.io.OutputStream;
//import java.io.UncheckedIOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.time.LocalDateTime;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//import java.util.UUID;
//import java.util.concurrent.ExecutionException;
//@Slf4j
//@LineMessageHandler
//public class LineBotController {
//    @Autowired
//    private LineMessagingClient lineMessagingClient;
//
//    @Autowired
//    private StudentRepository studentRepository;
//
//    @Autowired
//    private StudentInfoRepository studentInfoRepository;
//
//    @EventMapping
//    public void handleTextMessageEvent(MessageEvent<TextMessageContent> event) throws IOException {
//        log.info(event.toString());
//        TextMessageContent message = event.getMessage();
//        handleTextContent(event.getReplyToken(), event, event.getMessage());
//    }
//
//    private void handleTextContent(String token, Event event, TextMessageContent content) throws IOException {
//        String text = content.getText();
//        String userId = event.getSource().getUserId();
//
//        log.info("Got text message from {} : {} ", token, text );
//        switch (text) {
//
//            case "เริ่มต้นการรับข้อมูล": {
//
//                Student student = studentRepository.findByLineAccountAndDeletedFalse(userId);
//
//                if(null != student){
//                  if(student.isAcceptance()){
//                      this.replyText(token, "ท่านเคยทำการเริ่มต้นรับข้อมูลเเล้ว");
//                  }else{
//                      student.setAcceptance(true);
//                      studentRepository.save(student);
//                      this.replyText(token, "ท่านได้ทำการเริ่มต้นรับข้อมูลเป็นที่เรียบร้อยเเล้ว");
//                  }
//                }
//
//                break;
//            }
//            case "ยกเลิกการรับข้อมูล": {
//                Student student = studentRepository.findByLineAccountAndDeletedFalse(userId);
//                if(null != student){
//                    if(student.isAcceptance() == false){
//                        this.replyText(token, "ท่านเคยทำการยกเลิกการรับข้อมูลเเล้ว");
//                    }else{
//                        student.setAcceptance(false);
//                        studentRepository.save(student);
//                        this.replyText(token, "ท่านได้ทำการยกเลิกรับข้อมูลเป็นที่เรียบร้อยเเล้ว");
//                    }
//                }
//                break;
//            }
//            default:
//                log.info("Return echo message %s : %s", token, text);
//                this.replyText(token, "ไม่พบคำสั่งนี้ในระบบ");
//        }
//    }
//
//    private void replyText(@NonNull String replyToken, @NonNull String message) {
//        if(replyToken.isEmpty()) {
//            throw new IllegalArgumentException("replyToken is not empty");
//        }
//
//        if(message.length() > 1000) {
//            message = message.substring(0, 1000 - 2) + "...";
//        }
//        this.reply(replyToken, new TextMessage(message));
//    }
//
//    private void reply(@NonNull String replyToken, @NonNull Message message) {
//        reply(replyToken, Collections.singletonList(message));
//    }
//
//    private void reply(@NonNull String replyToken, @NonNull List<Message> messages) {
//        try {
//            BotApiResponse response = lineMessagingClient.replyMessage(
//                    new ReplyMessage(replyToken, messages)
//            ).get();
//        } catch (InterruptedException | ExecutionException e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//}