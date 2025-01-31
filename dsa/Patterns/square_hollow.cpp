#include <iostream>
using namespace std;

void square_hollow(int n){
    for (int i = 0; i < n; i++){
        string pattern = "";
        for (int j = 0; j < n; j++){
            if(i == 0 || j == 0 || i == n -1 || j == n - 1){
                pattern += "* ";
            }else{
                pattern += "  ";
            }
        }
        cout << pattern << endl;
    }
}
int main(){
    int n = 5;
    square_hollow(n);
    return 0;
}