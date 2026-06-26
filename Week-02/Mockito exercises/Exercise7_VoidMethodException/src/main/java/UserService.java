public class UserService {

    private NotificationService service;

    public UserService(NotificationService service) {

        this.service = service;

    }

    public void registerUser() {

        service.sendNotification();

    }

}