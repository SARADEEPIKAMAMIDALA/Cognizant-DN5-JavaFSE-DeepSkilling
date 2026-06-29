package com.example.hibernate1;

import org.hibernate.*;

import org.hibernate.cfg.Configuration;

import com.example.hibernate.model.Employee;

public class Main {

    public static void main(String[] args) {

        SessionFactory factory =
                new Configuration()
                .configure()
                .buildSessionFactory();

        Session session =
                factory.openSession();

        Transaction tx =
                session.beginTransaction();

        Employee emp =
                new Employee(1,"Sara");

        session.save(emp);

        tx.commit();

        session.close();

        factory.close();

        System.out.println("Employee Saved");

    }

}