package edu.arelance.nube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient //activamos Eureka client
public class RestaurantesmalagaappApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantesmalagaappApplication.class, args);
	}

}
