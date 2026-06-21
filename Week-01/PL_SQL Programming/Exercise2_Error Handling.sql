
--Exercise 2: Error Handling


--Scenario 1: SafeTransferFunds

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    Balance NUMBER
);

INSERT INTO Accounts VALUES (1, 5000);
INSERT INTO Accounts VALUES (2, 3000);

COMMIT;

SELECT * FROM Accounts;

CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    p_from_account NUMBER,
    p_to_account NUMBER,
    p_amount NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(
            -20001,
            'Insufficient Funds'
        );
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Fund Transfer Successful'
    );

EXCEPTION

    WHEN OTHERS THEN

        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer Failed: ' || SQLERRM
        );

END;
/

BEGIN
    SafeTransferFunds(1,2,500);
END;
/

SELECT * FROM Accounts;

--Scenario 2: UpdateSalary

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

INSERT INTO Employees
VALUES (
    1,
    'Alice Johnson',
    'Manager',
    70000,
    'HR',
    TO_DATE('2015-06-15','YYYY-MM-DD')
);

INSERT INTO Employees
VALUES (
    2,
    'Bob Brown',
    'Developer',
    60000,
    'IT',
    TO_DATE('2017-03-20','YYYY-MM-DD')
);

COMMIT;


SELECT * FROM EMPLOYEES;

CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_employee_id NUMBER,
    p_percentage NUMBER
)
IS
    v_count NUMBER;
BEGIN

    SELECT COUNT(*)
    INTO v_count
    FROM Employees
    WHERE EmployeeID = p_employee_id;

    IF v_count = 0 THEN
        RAISE_APPLICATION_ERROR(
            -20002,
            'Employee ID does not exist'
        );
    END IF;

    UPDATE Employees
    SET Salary =
        Salary +
        (Salary * p_percentage / 100)
    WHERE EmployeeID = p_employee_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Salary Updated Successfully'
    );

EXCEPTION

    WHEN OTHERS THEN

        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error: ' || SQLERRM
        );

END;
/

DELETE FROM EMPLOYEES
WHERE
        EMPLOYEEID = :EMPLOYEEID
    AND NAME = :NAME
    AND POSITION = :POSITION
    AND SALARY = :SALARY
    AND DEPARTMENT = :DEPARTMENT
    AND HIREDATE = :HIREDATE;

DELETE FROM EMPLOYEES
WHERE
        EMPLOYEEID = :EMPLOYEEID
    AND NAME = :NAME
    AND POSITION = :POSITION
    AND SALARY = :SALARY
    AND DEPARTMENT = :DEPARTMENT
    AND HIREDATE = :HIREDATE;

DELETE FROM EMPLOYEES
WHERE
        EMPLOYEEID = :EMPLOYEEID
    AND NAME = :NAME
    AND POSITION = :POSITION
    AND SALARY = :SALARY
    AND DEPARTMENT = :DEPARTMENT
    AND HIREDATE = :HIREDATE;

DELETE FROM EMPLOYEES
WHERE
        EMPLOYEEID = :EMPLOYEEID
    AND NAME = :NAME
    AND POSITION = :POSITION
    AND SALARY = :SALARY
    AND DEPARTMENT = :DEPARTMENT
    AND HIREDATE = :HIREDATE;

DELETE FROM EMPLOYEES
WHERE
        EMPLOYEEID = :EMPLOYEEID
    AND NAME = :NAME
    AND POSITION = :POSITION
    AND SALARY = :SALARY
    AND DEPARTMENT = :DEPARTMENT
    AND HIREDATE = :HIREDATE;

BEGIN
    UpdateSalary(1,10);
END;
/

SELECT EmployeeID, Name, Salary
FROM Employees;

--Scenario 3: AddNewCustomer  

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1985-05-15','YYYY-MM-DD'),
    10000,
    SYSDATE
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    15000,
    SYSDATE
);

COMMIT;

SELECT * FROM Customers;

CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_customer_id NUMBER,
    p_name VARCHAR2,
    p_dob DATE,
    p_balance NUMBER
)
IS
    v_count NUMBER;
BEGIN

    SELECT COUNT(*)
    INTO v_count
    FROM Customers
    WHERE CustomerID = p_customer_id;

    IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(
            -20003,
            'Customer ID already exists'
        );
    END IF;

    INSERT INTO Customers(
        CustomerID,
        Name,
        DOB,
        Balance,
        LastModified
    )
    VALUES(
        p_customer_id,
        p_name,
        p_dob,
        p_balance,
        SYSDATE
    );

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Customer Added Successfully'
    );

EXCEPTION

    WHEN OTHERS THEN

        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error: ' || SQLERRM
        );

END;
/

BEGIN
    AddNewCustomer(
        3,
        'Sara Deepika',
        TO_DATE('2005-01-01','YYYY-MM-DD'),
        25000
    );
END;
/

SELECT * FROM Customers;