from typing import List
class Solution:
    def swap(self, nums: List[int], i: int, j: int) -> None:
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        j = 0
        n = len(nums)

        while j < n:
            while i < j:
                if nums[i] == 0:
                    break
                else:
                    i = i + 1
            
            while j < n:
                if nums[j]:
                    break
                else:
                    j = j + 1
            
            if(i < j and j < n):
                self.swap(nums, i, j)
            else:
                i = i + 1
                j = j + 1
        
        print(nums)
        
solution = Solution()

nums = [0]

solution.moveZeroes(nums)