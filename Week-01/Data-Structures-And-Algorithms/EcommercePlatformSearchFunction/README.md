# E-commerce Platform Search Function

## File Name

`EcommerceSearchFunction.java`

## Analysis

### Comparison of Linear Search and Binary Search

#### Linear Search

Linear Search checks each product one by one until the target product is found.

Example:

```text
Laptop
Phone
Shoes
Watch
Tablet
```

Searching for **Watch**:

```text
Laptop → Phone → Shoes → Watch
```

The algorithm may need to check many elements before finding the product.

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(1)            |
| Average Case | O(n)            |
| Worst Case   | O(n)            |

---

#### Binary Search

Binary Search works only on a sorted array.

It repeatedly divides the search space into two halves.

Example:

```text
Laptop
Phone
Shoes
Tablet
Watch
```

Searching for **Watch**:

```text
Check middle element
↓
Discard half of the array
↓
Search remaining half
```

| Case         | Time Complexity |
| ------------ | --------------- |
| Best Case    | O(1)            |
| Average Case | O(log n)        |
| Worst Case   | O(log n)        |

---

### Which Algorithm is More Suitable?

For an e-commerce platform, **Binary Search is more suitable** because:

1. Product databases can contain thousands or millions of products.
2. Binary Search reduces the search space by half in every step.
3. It provides much faster search performance than Linear Search.

Example for **1,000,000 products**:

* Linear Search may perform up to **1,000,000 comparisons**.
* Binary Search requires approximately **20 comparisons**.

However, Binary Search requires the products to be stored in sorted order.

---

### Conclusion

* Linear Search is suitable for small or unsorted datasets.
* Binary Search is suitable for large sorted datasets and provides significantly better performance.
* Therefore, Binary Search is the preferred search algorithm for an e-commerce platform where fast product retrieval is important.
