
import java.util.*;

class Main{
    //in pascals triangle we actually calculate the combination of row and column of that particular position
    // given that row and column starts from 0
	public static void main (String[] args) {
		int numRows=5;
		for(int i=0;i<numRows;i++){
		    for(int j=0;j<i;j++){
		        System.out.print(combination(i,j)+",");
		    }
		    for(int j=i;j<=i;j++){
		        System.out.print(combination(i,j));
		    }
		    System.out.println();
		}
	}
	// for calculating combination we also require to find the factorial of the number
	static int combination(int num1,int num2){
	    return (fact(num1)/(fact(num2)*fact(num1-num2)));
	}
	static int fact(int num){
	    if(num==0 || num==1){
	        return 1;
	    }
	    return fact(num-1)*num;
	}
}
