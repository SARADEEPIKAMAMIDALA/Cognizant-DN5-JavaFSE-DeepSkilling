package adapter;

public class AdapterPatternTest {

    public static void main(String[] args) {

        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        paypal.processPayment(5000);

        stripe.processPayment(2500);
    }
}