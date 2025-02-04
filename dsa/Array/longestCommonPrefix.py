from typing import List
class Solution:
    def longestCommonPrefix(self, strs: List[str])-> str:
        if not strs:
            return ''
        current = strs[0]
        n = len(strs)

        for i in range(n-1):
            output = ''
            temp = strs[i + 1]

            substrLen = len(temp) if temp else 0

            j=0
        
            while substrLen > j and len(current) > j:
                # print('temp[j]',  temp[j])
                # print('current[j]', current[j])
                if temp[j] == current[j]:
                    output += temp[j]
                else:
                    break
                j += 1
        
            current = output
    
        return current
    
solution = Solution()
arr = []

print(solution.longestCommonPrefix(arr))