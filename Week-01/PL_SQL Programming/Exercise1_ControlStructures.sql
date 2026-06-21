-- Exercise 1: Control Structures

-- Create Customers Table

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

-- Create Accounts Table

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Create Transactions Table

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

-- Create Loans Table

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Create Employees Table

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

-- Insert Sample Data into Customers Table

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1955-05-15', 'YYYY-MM-DD'), 12000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

-- Insert Sample Data into Accounts Table

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

-- Insert Sample Data into Loans Table

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, SYSDATE + 20);

-- Insert Sample Data into Employees Table

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', DATE '2015-06-15');

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', DATE '2017-03-20');

-- Commit Changes

COMMIT;

-- Scenario 1: Apply 1% discount for senior customers

DECLARE
    v_age NUMBER;
BEGIN

    FOR cust IN (
        SELECT c.CustomerID,
               c.DOB,
               l.LoanID,
               l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
    )
    LOOP

        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12);

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = cust.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                '1% discount applied to Customer ID: '
                || cust.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

--Scenario 2: A customer can be promoted to VIP status based on their balance.

ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

BEGIN

    FOR cust IN (
        SELECT CustomerID,
               Balance
        FROM Customers
    )
    LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer '
                || cust.CustomerID
                || ' promoted to VIP'
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

--Scenario 3: Loan Due Reminder

BEGIN

    FOR loan_rec IN (

        SELECT c.Name,
               l.LoanID,
               l.EndDate

        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID

        WHERE l.EndDate BETWEEN
              SYSDATE
              AND
              SYSDATE + 30

    )

    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID '
            || loan_rec.LoanID
            || ' for Customer '
            || loan_rec.Name
            || ' is due on '
            || TO_CHAR(
                    loan_rec.EndDate,
                    'DD-MON-YYYY'
               )
        );

    END LOOP;

END;
/
