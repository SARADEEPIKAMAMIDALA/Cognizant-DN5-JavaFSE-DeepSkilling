import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;

@TestMethodOrder(OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(1)
    public void testFirst() {

        System.out.println("Executing Test 1");

    }

    @Test
    @Order(2)
    public void testSecond() {

        System.out.println("Executing Test 2");

    }

    @Test
    @Order(3)
    public void testThird() {

        System.out.println("Executing Test 3");

    }
}