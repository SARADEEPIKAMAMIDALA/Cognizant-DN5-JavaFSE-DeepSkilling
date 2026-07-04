package com.cognizant.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Transactional
    public List<Employee> getAllPermanentEmployees() {

        return repository.getAllPermanentEmployees();

    }

    @Transactional
    public List<Employee> getAllEmployeesNative() {

        return repository.getAllEmployeesNative();

    }

}