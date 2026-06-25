import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(
                    ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String userName = "Deepika";
        int age = 21;
        double accountBalance = 15000.75;

        logger.info(
                "User {} logged in successfully.",
                userName
        );

        logger.info(
                "User {} is {} years old.",
                userName,
                age
        );

        logger.info(
                "Account balance of {} is {}.",
                userName,
                accountBalance
        );

        logger.warn(
                "Low balance warning for user {}.",
                userName
        );

        logger.error(
                "Transaction failed for user {}.",
                userName
        );
    }
}