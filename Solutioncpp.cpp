#include <iostream>
using namespace std;

int main(){
    int n;
    cout << "Enter number of rows for generating Pascal's triangle: ";
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <=i; j++)
        {
            cout << fact(i) / (fact(j) * fact(i - j))<<" ";
            
        }
        cout << endl;
    }
    
}

int fact(int num){
    int factorial = 1;
    for (int i = 2; i <= num; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}



