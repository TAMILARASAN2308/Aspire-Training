/*
 * Title : Collections : Collections
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */

import java.util.*;  
public class  QueueCollections {  
    public static void main(String args[]){  
        PriorityQueue<String> queue=new PriorityQueue<String>();  
        queue.add("Amit Sharma");  
        queue.add("Vijay Raj");  
        queue.add("JaiShankar");  
        queue.add("Raj");  
        System.out.println("head:"+queue.element());  
        System.out.println("head:"+queue.peek());  
        System.out.println("iterating the queue elements:");  

        Iterator <String> itr=queue.iterator();  
        while(itr.hasNext()){  
            System.out.println(itr.next());  
        }  
        queue.remove();  
        queue.poll();  
        System.out.println("after removing two elements:");  
        
        Iterator<String> itr2=queue.iterator();  
        while(itr2.hasNext()){  
            System.out.println(itr2.next());  
        }  


        Deque<String> deque = new ArrayDeque<String>();  
        deque.add("Gautam");  
        deque.add("Karan");  
        deque.add("Ajay");   
        for (String str : deque) {  
        System.out.println(str);  
        }  

        Deque<String> dqar = new LinkedList<String>();  
        dqar.add("tamil");
        dqar.add("afru");
        dqar.add("naresh");
        dqar.add("sugu");
        dqar.add("muthu");
        System.out.println(dqar.peek());
        System.out.println(dqar.poll());
        
    }  
}  