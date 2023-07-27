package edu.arelance.nube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@SpringBootApplication
@Controller
//@EnableEurekaClient //activamos Eureka client
public class RestaurantesmalagaappApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantesmalagaappApplication.class, args);
	}
	@RequestMapping(value = "{path:[^\\.]*}", method = RequestMethod.GET)
    public String redirect() {
        return "forward:/";
    }
}
