package com.advertsing.webapplication.repository.usermanagement;

import com.advertsing.webapplication.entity.usermanagement.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findAllByRoleAndDeletedFalse(String role);
    Optional<User> findByUsername(String username);
    List<User> findByUsernameAndDeletedFalse(String username);
    User findByUsernameAndDeletedFalseAndActiveTrue(String username);
//    List<User> findAllByDeletedFalse();
    Page<User> findAllByDeletedFalse(Pageable pageable);
    Page<User> findByUsernameOrNameOrJobTitleOrWorkPhoneOrAddressOrCityOrProvinceOrZipCodeOrRoleAndDeletedFalse(String keyword, String keyword2, String keyword3, String keyword4, String keyword5, String keyword6, String keyword7, String keyword8, String keyword9, Pageable pageable);
}
