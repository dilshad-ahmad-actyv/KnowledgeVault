## brute force

# nums = [2, 5, 1, 8, 2, 9, 1]
# n = len(nums)
# k = 3
# max = float('-inf')
# storage = []

# for i in range(n - k + 1):
#     sum = 0
#     for j in range(i, i + k):
#         sum += nums[j]
    
#     if max < sum:
#         max = sum
#     storage.append(sum)

# # print(max(storage))
# print(max)


# optimized solution : sliding window

nums = [2, 5, 1, 8, 2, 9, 1]
k = 3
n = len(nums)
max_val = float('-inf')
i = 0
j = 0
sum = 0
storage = []

while j < n:
    sum += nums [j]

    if j - i + 1 < k:
        j += 1

    elif j - i + 1 == k:

        if max_val < sum:
            max_val = sum
        
        storage.append(sum)
        sum -= nums[i]
        i += 1
        j += 1
    
print(storage, max_val)