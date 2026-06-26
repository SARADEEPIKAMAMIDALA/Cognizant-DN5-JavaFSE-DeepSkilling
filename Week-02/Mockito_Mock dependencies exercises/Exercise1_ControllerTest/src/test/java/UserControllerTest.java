import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @Test
    public void testGetUser() {

        User user=new User();

        user.setId(1L);
        user.setName("Deepika");

        when(userService.getUserById(1L))
                .thenReturn(user);

        User result=
                userController.getUser(1L).getBody();

        assertEquals(
                "Deepika",
                result.getName()
        );

    }

}