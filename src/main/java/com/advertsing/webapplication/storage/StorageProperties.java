package com.advertsing.webapplication.storage;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;


@ConfigurationProperties("storage")
@Configuration
@EnableConfigurationProperties(StorageProperties.class)
public class StorageProperties {

	/**
	 * Folder location for storing files
	 */
	private String location = "src/main/resources/arffs/";

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
