public class PerformanceTester {

    public void performTask() {

        try {

            // Simulate a task taking 2 seconds
            Thread.sleep(2000);

        } catch (InterruptedException e) {

            e.printStackTrace();

        }

    }

}