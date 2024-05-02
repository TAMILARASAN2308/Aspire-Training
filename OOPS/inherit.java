class Students {
    String name;
    int id;
    public Students(String name, int id) {
        this.name = name;
        this.id = id;
    }
}
class Department extends Students{
    String department;
    public Department(String name,int id,String department){
        super(name,id);
        this.department=department;
    }
    public void display(){
        System.out.println(id);
        System.out.println(name);
        System.out.println(department);
    }
}
public class inherit {
    public static void main(String[] args) {
        Department obj1=new Department("tamil",1,"cse");
    obj1.display();
}
}
