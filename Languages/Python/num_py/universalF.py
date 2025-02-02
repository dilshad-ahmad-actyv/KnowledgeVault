import numpy as np
from math import log
# x = [1, 2, 3, 4, 10]
# y = [4, 5, 6, 7, 11]

# # z = []
# # for i, j in zip(x, y):
# #     z.append(i+j)

# # print(z)

# z = np.add(x, y)
# print(z)

# def myAddFunc(a, b):
#     return a + b


# myAddFunc = np.frompyfunc(myAddFunc, 2, 2)
# # print(myAddFunc([1, 0, 3], [9, 2, 0]))

# print(type(myAddFunc))

# np.add()
# np.subtract()
# np.multiply()
# np.divide()
# np.power()
# np.mod() 
# np.remainder()
# np.divmod()
# np.absolute()

# arr = np.arange(1,11)

# print(np.log10(arr))

# nlog = np.frompyfunc(log, 2, 1)
# result = nlog(10, 2)
# print(result)

# arr = np.arange(1, 10)

# arr_lcm = np.lcm.reduce(arr)
# print(arr_lcm)


# arr = np.arange(1, 11)
# result = np.gcd.reduce(arr)
# print(result)

x = np.tan(np.pi/2)
print(x)