n = 5

for i in range(n):
    pattern1 = ""

    for _ in range(0, i, 1):
        pattern1 += " "

    for _ in range(n - i, 0, -1):
        pattern1 += " " + "*"
    
    print(pattern1)

for j in range(n):
    pattern2 = ""

    for _ in range(0, n - j - 1, 1):
        pattern2 += " "

    for _ in range(0, j + 1, 1):
        pattern2 += " " + "*"
    
    print (pattern2)