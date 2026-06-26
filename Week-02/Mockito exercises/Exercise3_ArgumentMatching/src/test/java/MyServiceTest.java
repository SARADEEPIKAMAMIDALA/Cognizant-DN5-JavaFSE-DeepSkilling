import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testArgumentMatching() {

        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        MyService service =
                new MyService(mockApi);

        service.processData("Mockito");

        verify(mockApi).sendData(anyString());

    }
}