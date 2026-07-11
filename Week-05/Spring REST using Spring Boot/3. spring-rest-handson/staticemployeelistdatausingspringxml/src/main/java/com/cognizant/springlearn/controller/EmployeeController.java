package com.cognizant.springlearn.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.dao.EmployeeDao;
import com.cognizant.springlearn.model.Employee;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeDao employeeDao;

    @GetMapping("/employees")
    public ArrayList<Employee> getEmployees() {
        return employeeDao.getAllEmployees();
    }
}