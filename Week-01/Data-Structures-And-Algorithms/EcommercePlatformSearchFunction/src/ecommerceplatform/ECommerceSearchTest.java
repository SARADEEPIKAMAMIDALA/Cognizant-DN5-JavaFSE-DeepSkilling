package ecommerceplatform;


public class ECommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Headphones", "Electronics")
        };

        String target = "Watch";

        // Linear Search
        Product result1 =
                SearchAlgorithms.linearSearch(products, target);

        System.out.println("Linear Search Result:");
        System.out.println(result1);

        // Sort for Binary Search
        SearchAlgorithms.sortProducts(products);

        Product result2 =
                SearchAlgorithms.binarySearch(products, target);

        System.out.println("\nBinary Search Result:");
        System.out.println(result2);
    }
}