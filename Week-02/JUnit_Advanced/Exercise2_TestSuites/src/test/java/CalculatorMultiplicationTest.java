import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class CalculatorMultiplicationTest {

    @Test
    public void testMultiplication() {

        Calculator calculator = new Calculator();

        assertEquals(20,
                calculator.multiply(4, 5));

    }
}