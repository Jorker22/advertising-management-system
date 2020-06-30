package com.advertsing.webapplication.controller.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.entity.broadcastmanagement.MessageInfo;
import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import com.advertsing.webapplication.form.broadcastmanagement.MessageForm;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageInfoRepository;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageRepository;
import com.advertsing.webapplication.repository.broadcastmanagement.TagRepository;
import com.advertsing.webapplication.repository.campaignmanagement.CampaignRepository;
import com.linecorp.bot.client.LineMessagingClient;
import com.linecorp.bot.model.PushMessage;
import com.linecorp.bot.model.message.TextMessage;
import com.linecorp.bot.model.response.BotApiResponse;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;


@RequestMapping("/customers/{customerId}/campaigns/{campaignId}/broadcast")
@Controller
public class BroadcastController {
    @Autowired
    MessageRepository messageRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    MessageInfoRepository messageInfoRepository;

    @Autowired
    CampaignRepository campaignRepository;

    @GetMapping("/newBroadcast")
    public String createNewBroadcast(Model model, @PathVariable Long campaignId, @PathVariable Long customerId) {
        model.addAttribute("MessageForm", new MessageForm());

        List<Tag> tagList = tagRepository.findAll();
        model.addAttribute("tagList", tagList);
        model.addAttribute("campaignId", campaignId);
        model.addAttribute("customerId", customerId);
        return "pages/broadcastmanagement/broadcastForm";
    }

    @SneakyThrows
    @PostMapping("/newBroadcast/save")
    public String getSearchResultViaAjax(@Valid @RequestBody String messageJson, Errors errors, @Valid MessageForm messageForm, BindingResult bindingResult, RedirectAttributes redirectAttributes, @PathVariable Long campaignId, @PathVariable Long customerId) {

        if(null != messageRepository.findByMessageNameAndDeletedFalse(messageForm.getMessage_name())){
            redirectAttributes.addFlashAttribute("errorDuplicatedName", "Message Name Duplicated!");
            redirectAttributes.addFlashAttribute("MessageForm", new MessageForm());
            return "redirect:/customers/" + customerId + "/campaigns/" + campaignId + "/broadcast/newBroadcast";
        }

        Message message;
        Optional<Message> temp = messageRepository.findByIdAndDeletedFalse(Long.parseLong(messageForm.getId()));
        boolean isEdit = false;
        if(temp.isPresent()) {
            message = temp.get();
            isEdit = true;
        }
        else {
            message = new Message();
            isEdit = false;
        }

        message.setMessageName(messageForm.getMessage_name());
        message.setMessageStatus(messageForm.getMessage_status());
        message.setMessageType("bubble message");
        message.setSendDate(messageForm.getSend_date());
        message.setMessageJson(messageForm.getMessageJson());
        message.setCampaign(campaignRepository.findByIdAndDeletedFalse(campaignId).get());
        messageRepository.save(message);

        if(!isEdit) {
            MessageInfo messageInfo = new MessageInfo();
            Tag tagRepo = tagRepository.findByIdAndDeletedFalse(messageForm.getTagId());
            messageInfo.setMessage(message);
            messageInfo.setTag(tagRepo);
            messageInfoRepository.save(messageInfo);
        }

        return "redirect:/customers/" + customerId + "/campaigns/" + campaignId + "/broadcast/list";

    }

    @GetMapping("/list")
    public String viewBroadcastList(Model model, @PathVariable Long campaignId, @PathVariable Long customerId, @RequestParam(required = false, defaultValue =  "none") String status, @RequestParam(required = false, defaultValue = " ") String keyword, @RequestParam(required = false, defaultValue = "true") boolean ascending, @RequestParam(required = false, defaultValue = "sendDate") String sorting, @RequestParam(required = false, defaultValue = "") String startDate, @RequestParam(required = false, defaultValue = "9999-99-99") String endDate, @RequestParam(required = false, defaultValue =  "1") Integer page, @RequestParam(required = false, defaultValue = "10") Integer entities){
        String url;
        if(!status.equals("none"))
            url = "pages/broadcastmanagement/table";
        else
            url = "pages/broadcastmanagement/BroadCastList";

        Integer messageStatus = 2;

        if(status.equals("draft"))
            messageStatus = 0;
        else if(status.equals("sent"))
            messageStatus = 1;
        else
            messageStatus = 2;

        if(startDate.equals("")){
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//            startDate = java.time.LocalDate.now().format(formatter);
            startDate = "0000-00-00";
        }

        Pageable paging = PageRequest.of(page - 1, entities);
        Page<Message> messageList;

        List<Message> messageListSent = messageRepository.findByCampaignIdAndMessageStatusAndDeletedFalse(campaignId, 1);
        List<Message> messageListUnsent = messageRepository.findByCampaignIdAndMessageStatusAndDeletedFalse(campaignId, 2);
//        List<Message> messageList = messageRepository.findByCampaignIdAndMessageStatusAndDeletedFalse(campaignId, messageStatus);
//        List<Message> messageList = new ArrayList<>();
        if(keyword.equals(" "))
            messageList = messageRepository.findByCampaignIdAndMessageStatusAndDeletedFalse(campaignId, messageStatus, paging);
        else
            messageList = messageRepository.findMessagBetweenDate(campaignId, messageStatus, keyword, paging);

        String[] startDateSplit = startDate.split("-");
        String[] endDateSplit = endDate.split("-");
        List<MessageInfo> messageInfoList = new ArrayList<>();
        for(Message message : messageList) {
            if(message.getMessageStatus() != 0) {
                String[] messageDateSplit = message.getFullDate().split("-");
                if (((Integer.parseInt(startDateSplit[0]) <= Integer.parseInt(messageDateSplit[0])) && (Integer.parseInt(startDateSplit[1]) <= Integer.parseInt(messageDateSplit[1])) && (Integer.parseInt(startDateSplit[2]) <= Integer.parseInt(messageDateSplit[2])))
                        && ((Integer.parseInt(endDateSplit[0]) >= Integer.parseInt(messageDateSplit[0])) && (Integer.parseInt(endDateSplit[1]) >= Integer.parseInt(messageDateSplit[1])) && (Integer.parseInt(endDateSplit[2]) >= Integer.parseInt(messageDateSplit[2])))) {
                    messageInfoList.addAll(messageInfoRepository.findByMessage_IdAndDeletedFalse(message.getId()));
                }
            }
            else
                messageInfoList.addAll(messageInfoRepository.findByMessage_IdAndDeletedFalse(message.getId()));
        }

        double sent = 0;
        sent = messageListSent.size();
        double size = messageListUnsent.size() + sent;
        double percent = 0;
        if(sent != 0 && size != 0) {
            percent = (sent / size) * 100;
        }
        else {
            sent = 0;
        }

        DecimalFormat df = new DecimalFormat("#.##");
        String percentFormatted = df.format(percent);

        model.addAttribute("messageList", messageInfoList);
        model.addAttribute("messageSentNums", sent);
        model.addAttribute("messageUnsentNums", size);
        model.addAttribute("percent", percentFormatted);
        model.addAttribute("campaignId", campaignId);
        model.addAttribute("customerId", customerId);
        model.addAttribute("pages", messageList.getTotalPages());
        return url;
    }

    @GetMapping("/{id}")
    public String viewMessage(Model model, @PathVariable Long id, @PathVariable Long campaignId, @PathVariable Long customerId) {
        List<Tag> tagList = tagRepository.findAll();
        MessageForm messageForm = new MessageForm(messageRepository.findByIdAndDeletedFalse(id).get());
        String sendDate = messageForm.getSend_date();

        model.addAttribute("tagList", tagList);
        model.addAttribute("campaignId", campaignId);
        model.addAttribute("customerId", customerId);
        model.addAttribute("messageRawJson", messageForm.getMessageJson());
        model.addAttribute("MessageForm", messageForm);

        return "pages/broadcastmanagement/broadcastForm";
    }

    @GetMapping("/delete/{id}")
    public String deleteMessage(Model model, @PathVariable Long id, @PathVariable Long campaignId, @PathVariable Long customerId) {

        Message message = messageRepository.findByIdAndDeletedFalse(id).get();
        message.setDeleted(true);
        messageRepository.save(message);

        return "redirect:/customers/" + customerId + "/campaigns/" + campaignId + "/broadcast/list";
    }

    @GetMapping("/send")
    public ResponseEntity<String> broadcastTimer() throws InterruptedException {

        final LineMessagingClient client = LineMessagingClient
                .builder("EUd8OxXDJXBH3Xun8M/xjZVaVLw2EzY1LsvUjU0CqGyXAd+QEaJltxAaZK6yjYnZgFNgeWlUsUhbxr/9FZAFWNf3JtG0q3FvCcYnDIEpJAS+ZqTKeX1cADVNZT14Y+qaBPw8IqxM+VkQQQbp4oQjJQdB04t89/1O/w1cDnyilFU=")
                .build();

        final TextMessage textMessage = new TextMessage("hello");
        final PushMessage pushMessage = new PushMessage(
                "U98479149eef8c38f09adc63d7af0cd01",
                textMessage);
        List<Message> messageList = messageRepository.findByDeletedFalse();

        final BotApiResponse botApiResponse;
        try {
            botApiResponse = client.pushMessage(pushMessage).get();
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Hello World!", HttpStatus.OK);
        }

        System.out.println(botApiResponse);

        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
    }


}
