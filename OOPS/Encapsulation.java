class Student {
    int id;
    String name;
    char section;

    Student(int id, String name, char section) {
        this.id = id;
        this.name = name;
        this.section = section;
    }

    public void display() {
        System.out.println(id);
        System.out.println(name);
        System.out.println(section);
    }

    public void setValue(int id, String name, char section) {
        this.id = id;
        this.name = name;
        this.section = section;
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Student obj = new Student(1, "tamil", 'C');
        obj.display();
        obj.setValue(2, "afru", 'C');
        System.out.println(obj.name);
    }
}
