
def findIndexOfk(nums, k):
    nums = sorted(nums)
    
    n = len(nums)
    l = 0
    h = n - 1

    while l <= n:
        mid = (l + h) // 2
        # print(mid)
        if nums[mid] == k:
            return mid
        else:
            if nums[mid] > k:
                h = mid - 1
            else:
                l = mid + 1


nums = [4, 5, 0, 1, 8, 9, -1, 3]
k = 9

result = findIndexOfk(nums, k)
print(result)