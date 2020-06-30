package com.advertsing.webapplication.repository.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends JpaRepository<Message, Long> {
    Optional<Message> findByIdAndDeletedFalse(Long id);
    List<Message> findByDeletedFalse();
    List<Message> findByCampaignIdAndDeletedFalse(Long campaignId);
    List<Message> findByCampaignIdAndMessageStatusAndDeletedFalse(Long campaignId, int status);
    Page<Message> findByCampaignIdAndMessageStatusAndDeletedFalse(Long campaignId, int status, Pageable pageable);
//    Message findByMessage_nameAndDeletedFalse(String MessageName);
    Message findByMessageNameAndDeletedFalse(String MessageName);

    @Query("SELECT u FROM Message u WHERE u.campaign.id = :campaignId and u.deleted = false and u.sendDate LIKE CONCAT('%',:date,'%') and u.messageStatus = :status ORDER BY u.sendDate ASC")
    List<Message> findMessageByDate(@Param("campaignId") Long campaignId, @Param("date") String date,  @Param("status") int status);

    @Query("SELECT u FROM Message u WHERE u.campaign.id = :campaignId and u.deleted = false and u.sendDate < :date and u.messageStatus = :status ORDER BY u.sendDate DESC")
    List<Message> findMessageByRecentDate(@Param("campaignId") Long campaignId, @Param("date") String date,  @Param("status") int status, Pageable pageable);

    @Query("SELECT u FROM Message u WHERE (u.campaign.id = :campaignId) and (u.messageName = :keyword or u.campaign.campaignName = :keyword) and (u.messageStatus = :status and u.deleted = false)  ORDER BY u.sendDate ASC")
    Page<Message> findMessagBetweenDate(@Param("campaignId") Long campaignId, @Param("status") int status, @Param("keyword") String keyword, Pageable pageable);

//    @Query("SELECT u FROM Message u WHERE u.campaign.id = :campaignId and u.messageStatus = :status and u.deleted = false  ORDER BY u.sendDate ASC")
//    List<Message> findMessageBetweenDate(@Param("campaignId") Long campaignId,  @Param("status") int status);
}
