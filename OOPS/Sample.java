class Parent{
    String name;
    int age;
    Parent(String name,int age){
        this.name=name;
        this.age=age;
    }
    void eat(){
        System.out.println("eating");
    }
}
class Child extends Parent{
    String name="tamil";
    Child(String name, int age) {
        super(name, age);
}
}
public class Sample{
    public static void main(String[] args){
       Parent obj = new Parent("afru",21);
       Child obj1 = new Child("naresh",23);
       System.out.println(obj1.name);
       obj1.eat();
       
    }
}
