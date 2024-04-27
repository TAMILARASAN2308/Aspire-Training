class parent{
    String name;
    int age;
    parent(String name,int age){
        this.name=name;
        this.age=age;
    }
    void eat(){
        System.out.println("eating");
    }
}
class child extends parent{
    String name="tamil";
    child(String name, int age) {
        super(name, age);
}
}
public class main{
    public static void main(String[] args){
       parent obj = new parent("afru",21);
       child obj1 = new child("naresh",23);
       System.out.println(obj1.name);
       obj1.eat();
       
    }
}
