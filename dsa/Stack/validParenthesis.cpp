#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;
class Solution{
    public:
        bool isValid(string s) {
            vector<char> stack;
            unordered_map<char, char> pairs = {
                {'(', ')'},
                {'[', ']'},
                {'{', '}'}
            };

            for (char ch : s){
                if(pairs.find(ch) != pairs.end()){
                    stack.push_back(ch);
                }else{
                    if (stack.empty() || pairs[stack.back()] != ch) {
                        return false;
                    }
                    stack.pop_back();
                }
            }
            return stack.empty();
        };
};


int main(){
    Solution s;
    string parenthesis = "()]";
    bool ans = s.isValid(parenthesis);
    cout << ans << endl;
    return 0;
}