package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Employee;

import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Transactional
    public void addEmployee(){

        Employee emp =
                new Employee(1,"Sara");

        repository.save(emp);

        System.out.println("Employee Saved");

    }

}