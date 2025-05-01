# nums = [12, -1, -7, 8, -15, 30, 16, 28]
# n = len(nums)
# k = 3
# ans = []

# for i in range(n - k + 1):
#     bool = False
#     for j in range(i, i + k):
#         if nums[j] < 0:
#             bool = True
#             ans.append(nums[j])
#             break

#     if not bool:
#         ans.append(0)

# print(ans)


nums = [12, -1, -7, 8, -15, 30, 16, 28]
n = len(nums)
k = 3
ans = []
temp = []

i = 0
j = 0

while j < n:
    if nums[j] < 0:
        temp.append(nums[j])
    
    if j - i + 1 < k:
        j += 1
    elif j - i + 1 == k:
        if len(temp) > 0:
            ans.append(temp[0])

            if temp[0] == nums[i]:
                temp.pop(0)
        else:
            ans.append(0)
        

        i += 1
        j += 1

output = ' '.join([str(num) for num in ans])
print(output)