package com.advertsing.webapplication.repository.customermanagement;

import com.advertsing.webapplication.entity.customermanagement.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findAllByIssuerIdAndDeletedFalse(Long id);
    Page<Customer> findAllByIssuerIdAndDeletedFalse(Long id, Pageable pageable);
    List<Customer> findByCustomerNameAndDeletedFalse(String customerName);
    Optional<Customer> findByIdAndDeletedFalse(Long id);
    List<Customer> findAllByDeletedFalse();
    Page<Customer> findAllByDeletedFalse(Pageable pageable);

    @Query("SELECT u FROM Customer u WHERE (u.issuer.id = :issuerId and u.deleted = false) and (u.customerName = :customerName or u.customerType = :customerType or u.customerAddress = :customerAddress or u.registrationDate = :registrationDate)")
    Page<Customer> findAllCustomerByProperties(@Param("issuerId") Long issuerId, @Param("customerName") String customerName, @Param("customerType") String customerType, @Param("customerAddress") String customerAddress, @Param("registrationDate") String registrationDate, Pageable pageable);

//    Page<Customer> findByIssuerIdAndCustomerNameOrCustomerTypeOrCustomerAddressOrRegistrationDateAndDeletedFalse(Long issuerId, String customerName, String customerType, String customerAddress, String registrationDate, Pageable pageable);
    Page<Customer> findByCustomerNameOrCustomerTypeOrCustomerAddressOrRegistrationDateAndDeletedFalse(String customerName, String customerType, String customerAddress, String registrationDate, Pageable pageable);
}

