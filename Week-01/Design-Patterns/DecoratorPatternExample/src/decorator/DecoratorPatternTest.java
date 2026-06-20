package decorator;

public class DecoratorPatternTest {

    public static void main(String[] args) {

        Notifier notifier =
                new SlackNotifierDecorator(
                        new SMSNotifierDecorator(
                                new EmailNotifier()));

        notifier.send("System Maintenance Tonight");
    }
}