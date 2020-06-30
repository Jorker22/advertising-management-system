package com.advertsing.webapplication.repository.campaignmanagement;

import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
    Optional<Campaign> findByIdAndDeletedFalse(Long id);
    List<Campaign> findAllByCustomerIdAndDeletedFalse(Long id);
    Page<Campaign> findAllByCustomerIdAndDeletedFalse(Long id, Pageable pageable);
    List<Campaign> findAllByDeletedFalse();
    
    @Query("SELECT u FROM Campaign u WHERE (u.customer.id = :customerId and u.deleted = false) and (u.campaignName = :campaignName or u.campaignType = :campaignType or u.startDate = :startDate or u.endDate = :endDate)")
    Page<Campaign> findAllCustomerByProperties(@Param("customerId") Long customerId, @Param("campaignName") String campaignName, @Param("campaignType") String campaignType, @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);


}
