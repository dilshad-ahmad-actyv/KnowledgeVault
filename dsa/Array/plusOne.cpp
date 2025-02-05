#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int carry = 1;
        int n = digits.size();

        for(int i = n -1; i>=0; i--){
            int sum = digits[i] + carry;
            if(sum == 10){
                digits[i] = 0;
                carry = 1;
            }else{
                digits[i] = sum;
                carry = 0;
            }
        }

        if(carry == 1){
            digits.insert(digits.begin(), 1);
        }

        return digits;
    }
};

int main(){
    Solution s;
    vector<int> input = {1, 2, 3};
    vector<int> result = s.plusOne(input);
    cout << "[";
    for(size_t i = 0; i< result.size(); i++){
        cout << result[i];
        if(i != result.size() -1){
            cout << ", ";
        }
    }
    cout << "]" << endl;
    return 0;
}