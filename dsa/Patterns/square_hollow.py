n = 5

for i in range(n):
    pattern = ""
    for j in range(n):
        if i == 0 or j == 0 or i == n-1 or j == n - 1:
            pattern += "* "
        else:
            pattern += " " + " "
    print(pattern)