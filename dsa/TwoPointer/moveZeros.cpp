#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int i = 0;
        int j = 0;
        int n = nums.size();

        while(j < n){
            while(i < j){
                if(nums[i] == 0){
                    break;
                }
                i++;
            }

            while(j < n){
                if(nums[j] != 0){
                    break;
                }
                j++;
            }

            if(i < j && j < n){
                swap(nums, i, j);
            }else{
                i++;
                j++;
            }
        }
    }

    void swap(vector<int>& nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};


int main(){
    Solution s;
    vector<int> nums = {1};
    s.moveZeroes(nums);
    cout << "[";
    for(int num : nums){
        cout << num << ", ";
    }
    cout << "]" << endl;
    return 0;

}