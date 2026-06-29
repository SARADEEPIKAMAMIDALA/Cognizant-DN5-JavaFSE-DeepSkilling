package com.example.jpa;

import jakarta.persistence.*;

import com.example.jpa.model.Employee;

public class Main {

    public static void main(String[] args) {

        EntityManagerFactory emf =
                Persistence.createEntityManagerFactory("myPU");

        EntityManager em =
                emf.createEntityManager();

        EntityTransaction tx =
                em.getTransaction();

        tx.begin();

        Employee emp =
                new Employee(1,"Sara");

        em.persist(emp);

        tx.commit();

        em.close();
        emf.close();

        System.out.println("Employee Saved");

    }

}