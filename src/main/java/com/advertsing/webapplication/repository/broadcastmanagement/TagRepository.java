package com.advertsing.webapplication.repository.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
        Tag findByTagName(String tagName);
        Tag findByIdAndDeletedFalse(Long tagId);
}
