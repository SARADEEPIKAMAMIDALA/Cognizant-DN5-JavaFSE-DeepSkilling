package com.example.jpa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    private int id;
    private String name;

    public Employee() {}

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // getters setters
}