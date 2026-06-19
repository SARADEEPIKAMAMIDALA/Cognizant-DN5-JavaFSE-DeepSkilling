package employeeanagement;

class Employee {

    int employeeId;
    String name;
    String position;
    double salary;

    public Employee(int employeeId, String name,
                    String position, double salary) {

        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee ID: " + employeeId +
                ", Name: " + name +
                ", Position: " + position +
                ", Salary: " + salary;
    }
}

public class EmployeeManagementSystem {

    static Employee[] employees = new Employee[10];
    static int count = 0;

    // Add Employee
    public static void addEmployee(Employee employee) {

        if (count < employees.length) {
            employees[count++] = employee;
            System.out.println("Employee Added");
        }
    }

    // Search Employee
    public static Employee searchEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {
                return employees[i];
            }
        }
        return null;
    }

    // Traverse Employees
    public static void displayEmployees() {

        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    public static void deleteEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {

                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }

                employees[count - 1] = null;
                count--;

                System.out.println("Employee Deleted");
                return;
            }
        }

        System.out.println("Employee Not Found");
    }

    public static void main(String[] args) {

        addEmployee(new Employee(101, "Sara", "Developer", 50000));
        addEmployee(new Employee(102, "John", "Tester", 40000));
        addEmployee(new Employee(103, "Alex", "Manager", 70000));

        System.out.println("\nEmployees:");
        displayEmployees();

        System.out.println("\nSearch Result:");
        System.out.println(searchEmployee(102));

        deleteEmployee(102);

        System.out.println("\nAfter Deletion:");
        displayEmployees();
    }
}
