#include <stdio.h>


int fact(int num){
    int factorial = 1;
    for (int i = 2; i <= num; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}

int main(){
    int n;
    printf("Enter number of rows for generating Pascal's triangle: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <=i; j++)
        {
            printf("%d ",fact(i) / (fact(j) * fact(i - j)));
            
        }
        printf("\n");
    }
    
}