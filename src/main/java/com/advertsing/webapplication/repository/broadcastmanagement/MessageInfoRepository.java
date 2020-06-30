package com.advertsing.webapplication.repository.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.MessageInfo;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MessageInfoRepository extends JpaRepository<MessageInfo, Long> {

    MessageInfoRepository messageInfoRepository = new MessageInfoRepository() {
        @Override
        public List<MessageInfo> findAll() {
            return null;
        }

        @Override
        public List<MessageInfo> findAll(Sort sort) {
            return null;
        }

        @Override
        public Page<MessageInfo> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public List<MessageInfo> findAllById(Iterable<Long> iterable) {
            return null;
        }

        @Override
        public long count() {
            return 0;
        }

        @Override
        public void deleteById(Long aLong) {

        }

        @Override
        public void delete(MessageInfo messageInfo) {

        }

        @Override
        public void deleteAll(Iterable<? extends MessageInfo> iterable) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends MessageInfo> S save(S s) {
            return null;
        }

        @Override
        public <S extends MessageInfo> List<S> saveAll(Iterable<S> iterable) {
            return null;
        }

        @Override
        public Optional<MessageInfo> findById(Long aLong) {
            return Optional.empty();
        }

        @Override
        public boolean existsById(Long aLong) {
            return false;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends MessageInfo> S saveAndFlush(S s) {
            return null;
        }

        @Override
        public void deleteInBatch(Iterable<MessageInfo> iterable) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public MessageInfo getOne(Long aLong) {
            return null;
        }

        @Override
        public <S extends MessageInfo> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends MessageInfo> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends MessageInfo> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public <S extends MessageInfo> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends MessageInfo> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends MessageInfo> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public List<MessageInfo> findByMessage_IdAndDeletedFalse(Long messageId) {
            return null;
        }
    };

    List<MessageInfo> findAll();
    List<MessageInfo> findByMessage_IdAndDeletedFalse(Long messageId);
}
