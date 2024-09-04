/*
 * Title : Collections : Collections
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */


import java.util.*;  
public class SetCollections{  
    public static void main(String args[]){  
         
        // HashSet<String> set=new HashSet<String>();  
        // set.add("Ravi");  
        // set.add("Vijay");  
        // set.add("Ravi");  
        // set.add("Ajay");  
        
        // Iterator<String> itr=set.iterator();  
        // while(itr.hasNext()){  
        //     System.out.println(itr.next());  
        // } 
        
        
        // LinkedHashSet<String> set1=new LinkedHashSet<String>();  
        // set1.add("Ravi");  
        // set1.add("Vijay");  
        // set1.add("Ravi");  
        // set1.add("Ajay");  
        // Iterator<String> itr1=set1.iterator();  
        // while(itr1.hasNext()){  
        // System.out.println(itr1.next());  
        // }  

        TreeSet<String> set2=new TreeSet<String>();  
        set2.add("Ravi");  
        set2.add("Vijay");  
        set2.add("Ravi");  
        set2.add("Ajay");  
       
        Iterator<String> itr2=set2.iterator();  
        while(itr2.hasNext()){  
        System.out.println(itr2.next());  
        }
    }  
} 