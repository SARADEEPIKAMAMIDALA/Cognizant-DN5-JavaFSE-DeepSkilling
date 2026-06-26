import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class UserServiceTest {

    @Test
    public void testVoidMethodException() {

        NotificationService mockService =
                Mockito.mock(NotificationService.class);

        doThrow(new RuntimeException("Notification Failed"))
                .when(mockService)
                .sendNotification();

        UserService service =
                new UserService(mockService);

        assertThrows(

                RuntimeException.class,

                () -> {

                    service.registerUser();

                }

        );

        verify(mockService)
                .sendNotification();

    }
}