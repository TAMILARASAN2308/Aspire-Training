class Students {
    String name;
    int id;
    public Students(String name, int id) {
        this.name = name;
        this.id = id;
        name="tamil";
    }
}
//single inheritance
class Department extends Students { 
    String department;
    public Department(String name, int id, String department) {
        super(name, id);
        this.department = department;
    }
    void display() {
        System.out.println("name: " + name);
        System.out.println("id: " + id);
        System.out.println("department : " + department);
    }
}
//mutilevel inheritance
class Location extends Department {
    String area;
    public Location(String name, int id, String department, String area) {
        super(name, id, department);
        this.area = area;
    }
    void display() {
        super.display();
        System.out.println("area: " + area);
    }
}

//hierarchial inheritance
class Batch extends Students {
    String batch ;
    public Batch(String name, int id, String batch ) {
        super(name, id);
        this.batch = batch;
    }
    void display() {
        System.out.println("name: " + name);
        System.out.println("id: " + id);
        System.out.println("batch: " + batch);
    }
}

public class inheritance {
    public static void main(String[] args) {
        Department department = new Department("Ram", 101, "CSE");
        Location location = new Location("Rajesh", 102, "MECH", "pondicherry");
        Batch batch = new Batch("Jack", 103, "afternoon");
        department.display();
        location.display();
        batch.display();
    }
}