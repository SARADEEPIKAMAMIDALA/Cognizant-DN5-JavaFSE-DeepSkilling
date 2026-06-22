--Exercise 6: Cursors

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(20)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE
);

INSERT INTO Accounts VALUES (1,101,5000);
INSERT INTO Accounts VALUES (2,102,8000);
INSERT INTO Accounts VALUES (3,103,12000);

INSERT INTO Transactions
VALUES (1,1,SYSDATE,500,'Deposit');

INSERT INTO Transactions
VALUES (2,2,SYSDATE,1000,'Withdrawal');

INSERT INTO Transactions
VALUES (3,3,SYSDATE,2000,'Deposit');

INSERT INTO Loans
VALUES (1,101,50000,5,SYSDATE,ADD_MONTHS(SYSDATE,60));

INSERT INTO Loans
VALUES (2,102,80000,6,SYSDATE,ADD_MONTHS(SYSDATE,48));

COMMIT;

--Scenario 1: GenerateMonthlyStatements

DECLARE

    CURSOR GenerateMonthlyStatements IS
        SELECT TransactionID,
               AccountID,
               TransactionDate,
               Amount,
               TransactionType
        FROM Transactions
        WHERE EXTRACT(MONTH FROM TransactionDate)
              =
              EXTRACT(MONTH FROM SYSDATE)
        AND EXTRACT(YEAR FROM TransactionDate)
              =
              EXTRACT(YEAR FROM SYSDATE);

    v_transaction GenerateMonthlyStatements%ROWTYPE;

BEGIN

    OPEN GenerateMonthlyStatements;

    LOOP

        FETCH GenerateMonthlyStatements
        INTO v_transaction;

        EXIT WHEN GenerateMonthlyStatements%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(
            'Transaction ID: '
            || v_transaction.TransactionID
            || ' Account ID: '
            || v_transaction.AccountID
            || ' Amount: '
            || v_transaction.Amount
            || ' Type: '
            || v_transaction.TransactionType
        );

    END LOOP;

    CLOSE GenerateMonthlyStatements;

END;
/


--Scenario 2: ApplyAnnualFee

DECLARE

    CURSOR ApplyAnnualFee IS
        SELECT AccountID,
               Balance
        FROM Accounts;

    v_account ApplyAnnualFee%ROWTYPE;

BEGIN

    OPEN ApplyAnnualFee;

    LOOP

        FETCH ApplyAnnualFee
        INTO v_account;

        EXIT WHEN ApplyAnnualFee%NOTFOUND;

        UPDATE Accounts
        SET Balance = Balance - 500
        WHERE AccountID =
              v_account.AccountID;

        DBMS_OUTPUT.PUT_LINE(
            'Annual Fee Applied to Account '
            || v_account.AccountID
        );

    END LOOP;

    CLOSE ApplyAnnualFee;

    COMMIT;

END;
/

SELECT * FROM Accounts;


--Scenario 3: UpdateLoanInterestRates

DECLARE

    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID,
               InterestRate
        FROM Loans;

    v_loan UpdateLoanInterestRates%ROWTYPE;

BEGIN

    OPEN UpdateLoanInterestRates;

    LOOP

        FETCH UpdateLoanInterestRates
        INTO v_loan;

        EXIT WHEN UpdateLoanInterestRates%NOTFOUND;

        UPDATE Loans
        SET InterestRate =
            InterestRate + 0.5
        WHERE LoanID =
              v_loan.LoanID;

        DBMS_OUTPUT.PUT_LINE(
            'Interest Rate Updated for Loan '
            || v_loan.LoanID
        );

    END LOOP;

    CLOSE UpdateLoanInterestRates;

    COMMIT;

END;
/

SELECT LoanID,
       InterestRate
FROM Loans;















