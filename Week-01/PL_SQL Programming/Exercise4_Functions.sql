--Exercise 4: Functions

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);


CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
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

INSERT INTO Accounts
VALUES (
    1,
    1,
    'Savings',
    5000,
    SYSDATE
);

INSERT INTO Accounts
VALUES (
    2,
    2,
    'Checking',
    2000,
    SYSDATE
);

COMMIT;

--Scenario 1: CalculateAge

CREATE OR REPLACE FUNCTION CalculateAge(
    p_dob DATE
)
RETURN NUMBER
IS
    v_age NUMBER;
BEGIN

    v_age :=
        FLOOR(
            MONTHS_BETWEEN(
                SYSDATE,
                p_dob
            ) / 12
        );

    RETURN v_age;

END;
/

SELECT CalculateAge(
       TO_DATE('1985-05-15','YYYY-MM-DD')
       ) AS Age
FROM DUAL;

SELECT CalculateAge(
       TO_DATE('1985-05-15','YYYY-MM-DD')
       ) AS AGE
FROM DUAL;

--Scenario 2: CalculateMonthlyInstallment

CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(

    p_loan_amount NUMBER,
    p_interest_rate NUMBER,
    p_years NUMBER

)
RETURN NUMBER
IS

    v_monthly_installment NUMBER;

BEGIN

    v_monthly_installment :=
        (p_loan_amount +
         (p_loan_amount * p_interest_rate / 100))
         /
         (p_years * 12);

    RETURN ROUND(
        v_monthly_installment,
        2
    );

END;
/


--Scenario 3: HasSufficientBalance

CREATE OR REPLACE FUNCTION HasSufficientBalance(

    p_account_id NUMBER,
    p_amount NUMBER

)
RETURN VARCHAR2
IS

    v_balance NUMBER;

BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_account_id;

    IF v_balance >= p_amount THEN
        RETURN 'TRUE';
    ELSE
        RETURN 'FALSE';
    END IF;

EXCEPTION

    WHEN NO_DATA_FOUND THEN
        RETURN 'ACCOUNT NOT FOUND';

END;
/

SELECT HasSufficientBalance(
       1,
       3000
       ) AS RESULT
FROM DUAL;

SELECT HasSufficientBalance(
       2,
       5000
       ) AS RESULT
FROM DUAL;