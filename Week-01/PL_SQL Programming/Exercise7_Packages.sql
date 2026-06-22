
--Exercise 7: Packages


CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE
);

INSERT INTO Customers
VALUES (1,'John Doe',TO_DATE('1985-05-15','YYYY-MM-DD'),10000,SYSDATE);

INSERT INTO Customers
VALUES (2,'Jane Smith',TO_DATE('1990-07-20','YYYY-MM-DD'),15000,SYSDATE);

INSERT INTO Employees
VALUES (1,'Alice Johnson','Manager',70000,'HR',
TO_DATE('2015-06-15','YYYY-MM-DD'));

INSERT INTO Employees
VALUES (2,'Bob Brown','Developer',60000,'IT',
TO_DATE('2017-03-20','YYYY-MM-DD'));

INSERT INTO Accounts
VALUES (1,1,'Savings',5000,SYSDATE);

INSERT INTO Accounts
VALUES (2,1,'Checking',3000,SYSDATE);

INSERT INTO Accounts
VALUES (3,2,'Savings',7000,SYSDATE);

COMMIT;


--Scenario 1: CustomerManagement Package

CREATE OR REPLACE PACKAGE CustomerManagement AS

    PROCEDURE AddCustomer(
        p_id NUMBER,
        p_name VARCHAR2,
        p_dob DATE,
        p_balance NUMBER
    );

    PROCEDURE UpdateCustomer(
        p_id NUMBER,
        p_name VARCHAR2
    );

    FUNCTION GetCustomerBalance(
        p_id NUMBER
    ) RETURN NUMBER;

END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(
        p_id NUMBER,
        p_name VARCHAR2,
        p_dob DATE,
        p_balance NUMBER
    )
    IS
    BEGIN
        INSERT INTO Customers
        VALUES(
            p_id,
            p_name,
            p_dob,
            p_balance,
            SYSDATE
        );
    END;

    PROCEDURE UpdateCustomer(
        p_id NUMBER,
        p_name VARCHAR2
    )
    IS
    BEGIN
        UPDATE Customers
        SET Name = p_name
        WHERE CustomerID = p_id;
    END;

    FUNCTION GetCustomerBalance(
        p_id NUMBER
    )
    RETURN NUMBER
    IS
        v_balance NUMBER;
    BEGIN
        SELECT Balance
        INTO v_balance
        FROM Customers
        WHERE CustomerID = p_id;

        RETURN v_balance;
    END;

END CustomerManagement;
/

BEGIN
    CustomerManagement.AddCustomer(
        3,
        'Sara Deepika',
        DATE '2005-01-01',
        20000
    );
END;
/

SELECT CustomerManagement.GetCustomerBalance(1)
FROM DUAL;


--Scenario 2: EmployeeManagement Package

CREATE OR REPLACE PACKAGE EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER,
        p_department VARCHAR2
    );

    PROCEDURE UpdateEmployee(
        p_id NUMBER,
        p_salary NUMBER
    );

    FUNCTION CalculateAnnualSalary(
        p_id NUMBER
    ) RETURN NUMBER;

END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER,
        p_department VARCHAR2
    )
    IS
    BEGIN
        INSERT INTO Employees
        VALUES(
            p_id,
            p_name,
            p_position,
            p_salary,
            p_department,
            SYSDATE
        );
    END;

    PROCEDURE UpdateEmployee(
        p_id NUMBER,
        p_salary NUMBER
    )
    IS
    BEGIN
        UPDATE Employees
        SET Salary = p_salary
        WHERE EmployeeID = p_id;
    END;

    FUNCTION CalculateAnnualSalary(
        p_id NUMBER
    )
    RETURN NUMBER
    IS
        v_salary NUMBER;
    BEGIN

        SELECT Salary
        INTO v_salary
        FROM Employees
        WHERE EmployeeID = p_id;

        RETURN v_salary * 12;

    END;

END EmployeeManagement;
/

SELECT EmployeeManagement.CalculateAnnualSalary(1)
FROM DUAL;


--Scenario 3: AccountOperations Package

CREATE OR REPLACE PACKAGE AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid NUMBER,
        p_customerid NUMBER,
        p_type VARCHAR2,
        p_balance NUMBER
    );

    PROCEDURE CloseAccount(
        p_accountid NUMBER
    );

    FUNCTION GetTotalBalance(
        p_customerid NUMBER
    ) RETURN NUMBER;

END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid NUMBER,
        p_customerid NUMBER,
        p_type VARCHAR2,
        p_balance NUMBER
    )
    IS
    BEGIN
        INSERT INTO Accounts
        VALUES(
            p_accountid,
            p_customerid,
            p_type,
            p_balance,
            SYSDATE
        );
    END;

    PROCEDURE CloseAccount(
        p_accountid NUMBER
    )
    IS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID = p_accountid;
    END;

    FUNCTION GetTotalBalance(
        p_customerid NUMBER
    )
    RETURN NUMBER
    IS
        v_total NUMBER;
    BEGIN

        SELECT SUM(Balance)
        INTO v_total
        FROM Accounts
        WHERE CustomerID =
              p_customerid;

        RETURN v_total;

    END;

END AccountOperations;
/

SELECT AccountOperations.GetTotalBalance(1)
FROM DUAL;
















