n = 5

for i in range(n):
    pattern = ""
    for _ in range(i):
        pattern += "   "
    for j in range(n-i):
        pattern += " * "
    print(pattern)