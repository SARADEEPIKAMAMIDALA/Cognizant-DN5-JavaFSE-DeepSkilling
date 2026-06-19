# Financial Forecasting

## File Name

`FinancialForecast.java`

## Analysis

### Time Complexity of Recursive Algorithm

The recursive method calls itself once for every year until the value of `years` becomes 0.

Example:

```text
predictFutureValue(10000, 0.10, 5)
    ↓
predictFutureValue(11000, 0.10, 4)
    ↓
predictFutureValue(12100, 0.10, 3)
    ↓
predictFutureValue(13310, 0.10, 2)
    ↓
predictFutureValue(14641, 0.10, 1)
    ↓
predictFutureValue(16105.1, 0.10, 0)
```

If there are **n years**, the function executes **n recursive calls**.

**Time Complexity:** `O(n)`

**Space Complexity:** `O(n)`

This is because each recursive call is stored in the call stack until the base case is reached.

---

### Optimization to Avoid Excessive Computation

Instead of recursively calculating the value year by year, we can directly use the compound growth formula:

```text
Future Value = Present Value × (1 + Growth Rate)^Years
```

Example:

```java
double futureValue =
        currentValue * Math.pow(1 + growthRate, years);
```

#### Advantages

* No recursive calls.
* No extra stack memory.
* Faster execution.

**Optimized Time Complexity:** `O(1)`

**Optimized Space Complexity:** `O(1)`

---

### Conclusion

The recursive approach is useful for understanding recursion and solving the problem step by step. However, in real-world financial forecasting applications, the mathematical formula is preferred because it avoids unnecessary computations and provides better performance.
