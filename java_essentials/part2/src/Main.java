import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //convert string to int
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number: ");

        /*String stringNumber = scanner.nextLine();
        int number = Integer.valueOf(stringNumber);*/
        //numbers put together
        int number = Integer.valueOf(scanner.nextInt()); //scanner.nextInt()

        System.out.println("The number you entered as int: " + number);



    }
}