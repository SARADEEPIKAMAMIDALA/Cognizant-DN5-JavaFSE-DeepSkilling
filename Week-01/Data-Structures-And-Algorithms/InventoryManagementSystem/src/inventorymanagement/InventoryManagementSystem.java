package inventorymanagement;

import java.util.HashMap;
import java.util.Map;

class Product {

    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(int productId, String productName,
                   int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId +
                ", Name: " + productName +
                ", Quantity: " + quantity +
                ", Price: " + price;
    }
}

public class InventoryManagementSystem {

    private static Map<Integer, Product> inventory =
            new HashMap<>();

    // Add Product
    public static void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product Added Successfully");
    }

    // Update Product
    public static void updateProduct(int productId,
                                     int quantity,
                                     double price) {

        Product product = inventory.get(productId);

        if (product != null) {
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product Updated Successfully");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Delete Product
    public static void deleteProduct(int productId) {

        if (inventory.remove(productId) != null) {
            System.out.println("Product Deleted Successfully");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Display Inventory
    public static void displayInventory() {

        System.out.println("\nInventory:");

        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }

    public static void main(String[] args) {

        Product p1 =
                new Product(101, "Laptop", 20, 55000);

        Product p2 =
                new Product(102, "Mouse", 100, 500);

        Product p3 =
                new Product(103, "Keyboard", 50, 1500);

        addProduct(p1);
        addProduct(p2);
        addProduct(p3);

        displayInventory();

        updateProduct(102, 120, 550);

        deleteProduct(103);

        displayInventory();
    }
}