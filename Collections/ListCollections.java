/*
 * Title : Collections : Collections
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */

import java.util.*;

public class ListCollections{
    public static void main(String[] args) {
        // ArrayList <String> list = new ArrayList<String>();
        // list.add("tamil");-
        // list.add("afru");
        // list.add("naresh");
        // list.add("sugu");
        // list.add("muthu");

        // Iterator <String> itr = list.iterator();
        // while(itr.hasNext()){
        //     System.out.println(itr.next());
        // }


        // LinkedList<String> al=new LinkedList<String>();  
        // al.add("sakthi");  
        // al.add("susa");  
        // al.add("santh");  
        // al.add("sakthi");  

        // Iterator<String> itr1=al.iterator();  
        // while(itr1.hasNext()){  
        //       System.out.println(itr1.next());  
        // }  


        // Vector<String> v=new Vector<String>();  
        // v.add("lava");  
        // v.add("yaz");  
        // v.add("lee");  
        // v.add("pika");  

        // Iterator<String> itr2=v.iterator();  
        // while(itr2.hasNext()){  
        // System.out.println(itr2.next());  
        // }  


        Stack<String> stack = new Stack<String>();  
        stack.push("surya");  
        stack.push("dk");  
        stack.push("vishwa");  
        stack.push("siva");  
        stack.push("vishnu"); 
        stack.push("tharun");   
        stack.pop();  

        Iterator<String> itr3=stack.iterator();  
        while(itr3.hasNext()){  
        System.out.println(itr3.next());  
        }  
    }
}