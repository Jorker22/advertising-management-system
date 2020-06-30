package com.advertsing.webapplication;



import com.advertsing.webapplication.storage.StorageService;

import com.linecorp.bot.spring.boot.annotation.LineMessageHandler;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.nio.file.Path;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableJpaRepositories
@EnableScheduling
@LineMessageHandler
public class WebapplicationApplication {
	public static Path downloadedContentDir;


	public static void main(String[] args) {


		SpringApplication.run(WebapplicationApplication.class, args);

	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.deleteByName();
//			storageService.deleteAll();
//			storageService.init();
		};
	}
}
