#include <iostream>;
#include <string>;
#include <unordered_map>;

using namespace std;
class Solution{
    public:
    bool canConstruct(string ransomNote, string magazine){
        unordered_map<char, int> ransomNoteMap;
        unordered_map<char, int> magazineMap;

        for(char c: ransomNote){
            ransomNoteMap[c]++;
        }

        for (char c: magazine){
            magazineMap[c]++;
        }

        cout << "Ransom Note";
        for(auto it = ransomNoteMap.begin(); it!= ransomNoteMap.end(); ++it){
            cout << " " << it->first << ": " << it->second;
        }
        return false;
    };
};

int main(){
    Solution s;
    string ransomNote = "aa";
    string magazine = "aab";
    s.canConstruct(ransomNote, magazine);

    return 0;
}