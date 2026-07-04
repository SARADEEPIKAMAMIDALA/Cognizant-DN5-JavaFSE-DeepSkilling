package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static EmployeeService employeeService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        employeeService = context.getBean(EmployeeService.class);

        testHQL();

        testNativeQuery();

    }

    private static void testHQL() {

        LOGGER.info("HQL Query");

        List<Employee> employees =
                employeeService.getAllPermanentEmployees();

        employees.forEach(System.out::println);

    }

    private static void testNativeQuery() {

        LOGGER.info("Native Query");

        List<Employee> employees =
                employeeService.getAllEmployeesNative();

        employees.forEach(System.out::println);

    }

}