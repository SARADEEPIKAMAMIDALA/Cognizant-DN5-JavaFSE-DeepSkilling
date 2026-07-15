package com.cognizant.account;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@SpringBootApplication @EnableDiscoveryClient
public class AccountApplication{
	public static void main(String[]a){
		SpringApplication.run(AccountApplication.class,a);
		}
	}