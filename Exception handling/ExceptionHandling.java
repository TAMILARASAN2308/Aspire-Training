/*
 * Title : Collections : Exception Handling
 * Author : TAMILARASAN M
 * Created At : 1-06-2024
 * Last Modified Date : 1-6-2024
 * Reviewed By :
 * Review Date :
 */

public class ExceptionHandling {
    public static void main(String[] args) {
        // ArithmeticException
        try {
            int value = 5/0; 
            System.out.println("Result of division: " + value );
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException occurred: " + e.getMessage());
        }

        // ArrayIndexOutOfBoundsException
        try {
            int[] numbers = {1, 2, 3, 4, 5}; 
            System.out.println("Element at index 4: " + numbers[9]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException occurred: " + e.getMessage());
        }

        // NullPointerException 
        try {
            String string = "Hello"; 
            System.out.println("Length of string: " + string.length());
        } catch (NullPointerException e) {
            System.out.println("NullPointerException occurred: " + e.getMessage());
        }

        // NumberFormatException
        try {
            String str = "12345678";
            int num = Integer.parseInt(str);
            System.out.println("Parsed number: " + num);
        } catch (NumberFormatException e) {
            System.out.println("NumberFormatException occurred: " + e.getMessage());
        }

        // try/catch/finally
        try {
            int[] arr = {10, 20, 30}; 
            System.out.println("Element at index 2: " + arr[2]); 
            String str = "Hello"; 
            System.out.println(str .toUpperCase()); 
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException occurred: " + e.getMessage());
        } catch (NullPointerException e) {
            System.out.println("NullPointerException occurred: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed.");
        }

        // Custom exception handling
        try {
            int age = -20; 
            if (age < 0) {
                throw new IllegalArgumentException("Age cannot be negative.");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("IllegalArgumentException occurred: " + e.getMessage());
        }
    }
}
