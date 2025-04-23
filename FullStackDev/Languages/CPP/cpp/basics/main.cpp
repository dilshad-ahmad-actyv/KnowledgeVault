#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main(){
    srand(time(0));
    int myRandom = rand() % 11;
    cout << "Random number: " << myRandom << endl;
    return 0;
}