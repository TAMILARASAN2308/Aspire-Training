/*
 * Title : Collections : Exception Handling - NestedFinally
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */


public class NestedFinally {
    public static void main(String[] args) {
    try {
        try {
            int value = 10 / 0; 
            System.out.println("Result: " + value);
    } catch (ArithmeticException e) {
            System.out.println("ArithmeticException occurred" + e.getMessage());
    } finally {
            System.out.println("finally block executed");
    }
    } catch (Exception e) {
            System.out.println("Exception occurred" + e.getMessage());
    } finally {
            System.out.println("finally block");
    }
    }
    }
    