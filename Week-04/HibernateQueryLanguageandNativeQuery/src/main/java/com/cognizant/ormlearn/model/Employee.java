package com.cognizant.ormlearn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    private int id;
    private String name;
    private double salary;
    private boolean permanent;

    public Employee() {
    }

    public Employee(int id, String name, double salary, boolean permanent) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
    }

    // Getters and Setters

    @Override
    public String toString() {
        return "Employee [id=" + id +
               ", name=" + name +
               ", salary=" + salary +
               ", permanent=" + permanent + "]";
    }
}