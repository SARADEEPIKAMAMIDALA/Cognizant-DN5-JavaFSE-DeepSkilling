import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class UserServiceTest {

    @Test
    public void testVoidMethod() {

        NotificationService mockService =
                Mockito.mock(NotificationService.class);

        doNothing().when(mockService)
                .sendNotification();

        UserService service =
                new UserService(mockService);

        service.registerUser();

        verify(mockService)
                .sendNotification();

    }
}