class Solution:
    def is_valid(self, s: str)-> bool:
        stack = []
        pairs = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        
        for char in s:
            if char in pairs:
                stack.append(char)
            else:
                if not stack or pairs[stack.pop()] != char:
                    return False
            
        return len(stack) == 0

solution = Solution()
res = solution.is_valid("(){")
print(res)