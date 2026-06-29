package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Employee {

    @Id
    private int id;

    private String name;

    public Employee() {}

    public Employee(int id,String name){

        this.id=id;
        this.name=name;

    }

}