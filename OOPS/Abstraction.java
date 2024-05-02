class Employee {
    private int id;
    private String name;
    private int salary;

    Employee(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void display() {
        System.out.println(id);
        System.out.println(name);
        System.out.println(salary);
    }

    public void setValue(int id, String name, int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Employee obj = new Employee(1, "tamil", 20000);
        obj.setValue(2, "afru", 15000);
        obj.display();
    }
}
