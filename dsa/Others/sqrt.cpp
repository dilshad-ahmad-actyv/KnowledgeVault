#include <iostream>
using namespace std;

class Solution {
public:
    float mySqrt(int x) {
        if(x < 0){
            return -1;
        }
        if(x == 0 || x == 1) {
            return x;
        }

        int low = 0;
        int high = x;
        int ans = 0;

        while(low <= high){
           long long mid = low + (high - low)/2;
           long long square = mid * mid;
           if (square== x) return mid;
            else if(square < x){
                ans = mid;
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        return ans;
    }
};

int main(){
    Solution s;
    int n = 8;
    int res = s.mySqrt(n);
    cout << "Square root of " << n << " is: " << res << endl;
    return 0;
}