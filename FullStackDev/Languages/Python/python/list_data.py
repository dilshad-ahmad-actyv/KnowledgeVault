
n = 18
isOdd = n % 2 == 1
print(n >= 2  and n <= 5)
if isOdd:
    print('Weird')
elif not isOdd and (n >= 2  & n <= 5):
    print('Not Weird')
elif not isOdd & (n >= 6 & n <= 20):
    print('Weird')
elif not isOdd & n > 20:
    print('Not Weird')