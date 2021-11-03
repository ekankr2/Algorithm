import java.util.Scanner;

public class Prob1110 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
            int N = scan.nextInt();
            int M = N;
            int i = 0;
        while (true){
            N = (N % 10 * 10) + ((N / 10 + N % 10)%10);
            i++;
            if(N==M){
                break;
            }
        }
        System.out.println(i);

    }
}
