

package com.example.demo;

import org.springframework.boot.*;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.ApplicationContext;

import com.example.demo.service.EmployeeService;

@SpringBootApplication
public class SpringDataJpaExampleApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(
                		SpringDataJpaExampleApplication.class,args);

        EmployeeService service =
                context.getBean(EmployeeService.class);

        service.addEmployee();

    }

}