import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testMultipleReturns() {

        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        when(mockApi.getData())

                .thenReturn("First Call")

                .thenReturn("Second Call")

                .thenReturn("Third Call");

        MyService service =
                new MyService(mockApi);

        assertEquals(
                "First Call",
                service.fetchData()
        );

        assertEquals(
                "Second Call",
                service.fetchData()
        );

        assertEquals(
                "Third Call",
                service.fetchData()
        );

    }
}