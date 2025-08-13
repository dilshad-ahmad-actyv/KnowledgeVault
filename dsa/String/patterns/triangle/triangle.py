# n = 5

# for i in range(n):
#     pattern = ""
#     for _ in range(i):
#         pattern += "   "
#     for j in range(n-i):
#         pattern += " * "
#     print(pattern)



n = 10

for i in range(n):
    pattern = ''

    for k in range(n - i - 1):
        pattern += ' ' + ' '
        
    for j in range(i+1):
        pattern += ' ' + "*"
    
    print(pattern)
