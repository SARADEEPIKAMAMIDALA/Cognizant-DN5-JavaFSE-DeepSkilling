import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class ServiceTest {

    @Test
    public void testServiceWithMockRepository() {

        // Create Mock Repository
        Repository mockRepository =
                mock(Repository.class);

        // Stub Repository Method
        when(mockRepository.getData())
                .thenReturn("Mock Data");

        // Inject Mock into Service
        Service service =
                new Service(mockRepository);

        // Execute Service Method
        String result =
                service.processData();

        // Verify Output
        assertEquals(
                "Processed Mock Data",
                result
        );

    }

}