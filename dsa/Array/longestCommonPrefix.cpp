#include <iostream>
#include <vector>
using namespace std;

class Solution{
    public:
        string longestCommonPrefix(vector<string>& strs){
            if (strs.empty())
                return "";
            string current = strs[0];
            int n = strs.size();
            ;
            for (int i = 0; i < n - 1; i++) {
                string output = "";
                string temp = strs[i + 1];
                int substrLen = temp.size();
                int j = 0;

                while (substrLen > j) {
                if (temp[j] == current[j]) {
                    output += temp[j];
                } else {
                    break;
                }
                j++;
                }
                current = output;
            }
            return current;
        }
};

int main(){
    Solution s;
    vector<string> strs = {};
    string prefix = s.longestCommonPrefix(strs);
    cout << prefix << endl;
    return 0;
}