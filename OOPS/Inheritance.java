class Student {
    String name;
    int id;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
        name = "tamil"; // This line seems redundant, as you're immediately overriding the name parameter passed to the constructor.
    }
}

// Single inheritance
class Department extends Student {
    String department;

    public Department(String name, int id, String department) {
        super(name, id);
        this.department = department;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Department: " + department);
    }
}

// Multilevel inheritance
class Location extends Department {
    String area;

    public Location(String name, int id, String department, String area) {
        super(name, id, department);
        this.area = area;
    }

    void display() {
        super.display();
        System.out.println("Area: " + area);
    }
}

// Hierarchical inheritance
class Batch extends Student {
    String batch;

    public Batch(String name, int id, String batch) {
        super(name, id);
        this.batch = batch;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Batch: " + batch);
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Department department = new Department("Ram", 101, "CSE");
        Location location = new Location("afru", 102, "MECH", "pondicherry");
        Batch batch = new Batch("muthu", 103, "afternoon");
        department.display();
        location.display();
        batch.display();
    }
}
