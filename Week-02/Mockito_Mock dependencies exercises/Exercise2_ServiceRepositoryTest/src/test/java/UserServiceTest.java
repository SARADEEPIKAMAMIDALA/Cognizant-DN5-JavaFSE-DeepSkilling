import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository repository;

    @InjectMocks
    private UserService service;

    @Test
    public void testGetUserById() {

        User user=new User();

        user.setId(1L);
        user.setName("Deepika");

        when(repository.findById(1L))
                .thenReturn(Optional.of(user));

        User result=
                service.getUserById(1L);

        assertEquals(
                "Deepika",
                result.getName()
        );

    }

}