package com.advertsing.webapplication;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.entity.broadcastmanagement.MessageInfo;
import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import com.advertsing.webapplication.entity.schoolmanagement.Student;
import com.advertsing.webapplication.entity.schoolmanagement.StudentInfo;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageInfoRepository;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageRepository;
import com.advertsing.webapplication.repository.schoolmanagement.StudentInfoRepository;
import com.advertsing.webapplication.repository.schoolmanagement.StudentRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.linecorp.bot.client.LineMessagingClient;
import com.linecorp.bot.model.PushMessage;
import com.linecorp.bot.model.message.FlexMessage;
import com.linecorp.bot.model.message.flex.container.Bubble;
import com.linecorp.bot.model.response.BotApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Component
public class BroadcastScheduler {

    @Autowired
    MessageInfoRepository messageInfoRepository;

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    StudentInfoRepository studentInfoRepository;

    @Autowired
    StudentRepository studentRepository;

    private  String jsonInStringFunction = "";
    private  String userLineIdFunction;

    @Scheduled(fixedRate = 1000)
    public void createBroadcastScheduler() throws JsonProcessingException {
        final LineMessagingClient client = LineMessagingClient
                .builder("LEpq8gxB+z59AVQANU163hjfNpqf6DeXtvr24Dy/lr3mtS2ekor5/js7jMYs20MJGFrIdSDRf1meEsD28k7pp4hog9nCdutIO2ndpzj6ti51fE3yGZxcyUKLHCwmuPjLFou8tU9r9B4lvJD0nUuybQdB04t89/1O/w1cDnyilFU=")
                .build();

        List<MessageInfo> messageInfoList = messageInfoRepository.findAll();

        List<Message> messageArrayList = new ArrayList<>();
        List<Student> students = new ArrayList<>();
        HashMap<Message, Student> StudentMapWithMessage = new HashMap<>();

        for (MessageInfo messageInfo: messageInfoList) {
            messageArrayList.add(messageRepository.findByIdAndDeletedFalse(messageInfo.getMessage().getId()).get());
            List<Tag> tagList = new ArrayList<>();
            tagList.add(messageInfo.getTag());

            List<StudentInfo> studentInfoList = studentInfoRepository.findByDeletedFalseAndTagListIn(tagList);

            for (StudentInfo studentinfo: studentInfoList) {
                students.add(studentRepository.findByIdAndDeletedFalse(studentinfo.getStudent().getId()));
                Student student = studentRepository.findByIdAndDeletedFalse(studentinfo.getStudent().getId());

                if(student.isAcceptance()){
                    StudentMapWithMessage.put(messageRepository.findByIdAndDeletedFalse(messageInfo.getMessage().getId()).get(),studentRepository.findByIdAndDeletedFalse(studentinfo.getStudent().getId()));
                }

            }
        }

        DateFormat df = new SimpleDateFormat("d-M-yyyy");
        Date dateobj = new Date();

        for (Map.Entry<Message, Student> entry : StudentMapWithMessage.entrySet()) {

            if (entry.getKey().getSendDate().equals(df.format(dateobj))) {
                if (entry.getKey().getMessageStatus() != 1) {

                    jsonInStringFunction = entry.getKey().getMessageJson();
                    Message message = messageRepository.findByIdAndDeletedFalse(entry.getKey().getId()).get();
                    message.setMessageStatus(1);
                    message.setSent(message.getSent() + 1);
                    messageRepository.save(message);

                    userLineIdFunction = entry.getValue().getLineAccount();
                    //JSON from String to Object
                    ObjectMapper mapper = new ObjectMapper();
                    Bubble bubble = mapper.readValue(jsonInStringFunction, Bubble.class);

                    final PushMessage pushMessage = new PushMessage(
                            userLineIdFunction,
                            new FlexMessage("Restaurant", bubble));
                    final BotApiResponse botApiResponse;

                    try {
                        botApiResponse = client.pushMessage(pushMessage).get();
                    } catch (InterruptedException | ExecutionException e) {
                        e.printStackTrace();
                        return;
                    }

                }
            }
        }

    }
}
