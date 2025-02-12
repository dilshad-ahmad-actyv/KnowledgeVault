
from typing import List
class Solution:
    def merge (self, nums1: List[int], m: int, nums2: List[int], n:int) -> None:
        p1 = m - 1
        p2 = n - 1
        p = m + n - 1
    
        while p1 >= 0 and p2 >= 0:
            if (nums1[p1] > nums2[p2]):
                nums1[p] = nums1[p1]
                p1 = p1 - 1
                p = p - 1
            else:
                nums1[p] = nums2[p2]
                p2 = p2 - 1
                p = p - 1
        
    

        while (p2 >= 0):
            nums1[p] = nums2[p2]
            p2 = p2 - 1
            p = p - 1
        while (p1 >= 0):
            nums1[p] = nums1[p1]
            p1 = p1 - 1
            p = p - 1
        print(nums1)


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
s = Solution()
s.merge(nums1, m, nums2, n)
