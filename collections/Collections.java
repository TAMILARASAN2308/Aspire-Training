/*
 * Title : Collections : Collections
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */

import java.util.*;
public class Collections{
    public static void main(String[] args) {
        // ArrayList
        ArrayList<Integer> list= new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(4);
        list.add(3);
        for(int Value:list){
            System.out.println(Value);
        }
        
        System.out.println("List Size:"+list.size());
        System.out.println(list. isEmpty());
        System.out.println(list.contains(3));
        list.remove(1);

        // Iterator<Integer>it = list.iterator();
        // while(it.hasNext()){
        //     System.out.println(it);
        // }
        list.clear();
        System.out.println(list);

        // LinkedList
        LinkedList<String> Bikes = new LinkedList<>();
        Bikes .add("R15");
        Bikes .add("DUKE");
        Bikes .add("ENFIELD");

System.out.println(" List of Bikes :");
for (String Bike :Bikes ) {
    System.out.println(Bike);
}

Bikes.addFirst("NINJA");
Bikes.addLast("BMW S1000RR");
 System.out.println(Bikes.getFirst());
 System.out.println(Bikes.getLast());
Bikes.removeFirst();
Bikes.removeLast();

    //  TreeSet
    TreeSet<String> empNames = new TreeSet<>();
    empNames.add("Tamil");
    empNames.add("Afru");
    empNames.add("Naresh");
    empNames.add("Muthu"); 
    empNames.add("Sugu"); 

    for (String empName : empNames) {
        System.out.println(empName);
    }
    System.out.println("First Employee"+empNames.first());
    System.out.println("Last Employee"+empNames.last());
    System.out.println("Contains or Not: "+empNames.contains("Tamil"));
    System.out.println(empNames.size());
    System.out.println(empNames);
    empNames.remove("Tamil");
    System.out.println(empNames);
    empNames.clear();
    System.out.println(empNames);

    // LinkedHashMap
    LinkedHashMap<String, Integer> empSalaries = new LinkedHashMap<>();
    empSalaries.put("Tamil", 72500);
    empSalaries.put("Afru", 63000);
    empSalaries.put("Yaz", 53500);

   System.out.println("Employee Salaries:");
   for (String name :  empSalaries.keySet()) {
        System.out.println("Name: " + name + ", Salary: $" +  empSalaries.get(name));
    }


boolean contains =  empSalaries.containsKey("Yaz");
System.out.println("Contains or Not: "+contains);
int salary = empSalaries.get("Tamil");
System.out.println("Salary: "+salary);
empSalaries.remove("Afru");
    }
}