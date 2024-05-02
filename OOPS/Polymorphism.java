class Overloading {
    public void display() {
        System.out.println("hello world");
    }

    public void display(String name) {
        System.out.println(name);
    }
}

class Overriding extends Overloading {
    @Override
    public void display() {
        System.out.println("override complete");
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Overloading obj1 = new Overloading();
        Overriding obj2 = new Overriding();
        obj1.display("tamil");
        obj2.display();
    }
}
