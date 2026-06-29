# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Overview

This hands-on demonstrates the concepts and differences between **JPA**, **Hibernate**, and **Spring Data JPA**. It explains how these technologies work together to simplify database operations in Java applications.

---

## Comparison: JPA vs Hibernate vs Spring Data JPA

| Feature                    | JPA                         | Hibernate      | Spring Data JPA           |
| -------------------------- | --------------------------- | -------------- | ------------------------- |
| **Type**                   | Specification               | ORM Framework  | Spring Module             |
| **Developed By**           | Oracle (Java Specification) | Hibernate Team | Spring                    |
| **Implementation**         | No                          | Yes            | No                        |
| **Purpose**                | Defines persistence rules   | Implements JPA | Simplifies JPA usage      |
| **Boilerplate Code**       | More                        | More           | Very Less                 |
| **Transaction Management** | No                          | Partial        | Yes (`@Transactional`)    |
| **Repository Support**     | No                          | No             | Yes (`JpaRepository`)     |
| **SQL Generation**         | Depends on implementation   | Yes            | Uses Hibernate internally |

---

# 1. Java Persistence API (JPA)

## Definition

* JPA stands for **Java Persistence API**.
* It is a **Java specification** for mapping Java objects to database tables.
* JPA **does not provide an implementation**.
* It only defines interfaces and annotations that ORM frameworks must implement.

### Common JPA Annotations

```java
@Entity
@Table
@Id
@Column
@OneToMany
@ManyToOne
```

### Example

```java
@Entity
@Table(name = "country")
public class Country {

    @Id
    private String code;

    private String name;
}
```

> **Note:** JPA only defines how persistence should work. A framework like Hibernate provides the implementation.

---

# 2. Hibernate

## Definition

* Hibernate is an **Object Relational Mapping (ORM)** framework.
* It is one of the most widely used **implementations of JPA**.
* Hibernate maps Java objects to database tables and automatically generates SQL queries.

### Hibernate Example

```java
Session session = factory.openSession();

Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();
```

### Drawbacks

Using Hibernate directly requires manual handling of:

* Opening sessions
* Beginning transactions
* Saving entities
* Committing transactions
* Closing sessions

This results in more boilerplate code.

---

# 3. Spring Data JPA

## Definition

Spring Data JPA is **not an ORM framework**.

It is a Spring module built on top of JPA implementations (such as Hibernate) that simplifies database access by reducing boilerplate code.

### Repository

```java
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}
```

### Service

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {

        employeeRepository.save(employee);

    }
}
```

### Advantages

Spring Data JPA automatically handles:

* Session management
* Transaction management
* Basic CRUD operations
* Query execution

Developers only need to use repository methods such as:

* `save()`
* `findAll()`
* `findById()`
* `deleteById()`

---

# Architecture

```text
Application
      │
      ▼
Spring Data JPA
      │
      ▼
JPA (Specification)
      │
      ▼
Hibernate (Implementation)
      │
      ▼
MySQL Database
```

---

# Hibernate vs Spring Data JPA

## Hibernate

```java
Session session = factory.openSession();

Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();
```

Requires manual session and transaction management.

---

## Spring Data JPA

### Repository

```java
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}
```

### Service

```java
@Transactional
public void addEmployee(Employee employee) {

    employeeRepository.save(employee);

}
```

Only a single repository method is required to save an entity.

---

# Advantages

## JPA

* Standard Java specification
* Database independent
* Uses standard annotations
* Portable across different ORM implementations

## Hibernate

* Powerful ORM framework
* Automatic SQL generation
* Automatic table mapping
* Caching support
* Lazy loading support

## Spring Data JPA

* Reduces boilerplate code
* Automatic CRUD operations
* Built-in pagination and sorting
* Query generation from method names
* Easy integration with Spring Boot
* Simplified transaction management

---

# Interview Question

## Difference between JPA, Hibernate and Spring Data JPA

### JPA

* A Java specification for object-relational mapping.
* Defines interfaces and annotations but does not provide an implementation.

### Hibernate

* An ORM framework that implements JPA.
* Performs the actual database operations and manages object-relational mapping.

### Spring Data JPA

* A Spring module built on top of JPA.
* Simplifies data access using `JpaRepository`, reduces boilerplate code, and manages transactions automatically.

---

# Conclusion

* **JPA** → Specification (defines persistence rules)
* **Hibernate** → ORM framework that implements JPA
* **Spring Data JPA** → Simplifies JPA by providing repository abstractions and automatic transaction management

---

## Technologies Covered

* Java
* JPA
* Hibernate
* Spring Framework
* Spring Data JPA
* MySQL
* Maven

---



Digital Nurture 5.0 – Java Full Stack Engineer (FSE) Deep Skilling
