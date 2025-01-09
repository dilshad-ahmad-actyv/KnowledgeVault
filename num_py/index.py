import numpy as np

# nums = [1, 2, 3, 4]

# arr = np.array(nums)
# print(arr)
# print(type(arr))

# print(type(np.array(2)))

# mats = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# arr = np.matrix(mats)
# print(arr)

# tensor_3rd = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
# print(tensor_3rd)

# d0 = np.array(42)
# d1 = np.array([1, 2, 3, 4, 5, 6, 7])
# d2 = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
# d3 = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# d10 = np.array([[[[[10]]]]])

# print(a.ndim)
# print(b.ndim)
# print(c.ndim)
# print(d.ndim)
# print(e.ndim)

# arr = np.array(12, ndmin=10)
# print(arr)
# print(arr.ndim)

# print(type(d2))

# str_arr = np.array(['a', 'b', 'c', 'd'], dtype='i')

# print(str_arr)
# print(str_arr.dtype)

# arr = np.array([1.1, 2.2, 3.3, 4.4, 0])
# newarr = arr.astype('S')
# print(newarr)
# print(newarr.dtype)

# arr = np.array([1, 2, 3, 4, 5])
# x = arr.copy()
# y = arr.view()

# print(x.base)
# print(y.base)
# x = arr.copy()
# arr[0] = 10
# print(arr)
# print(x)

# y = arr.view()
# y[0] = 39
# print(arr)
# print(y)

# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
# newarr = arr.reshape(2, -1, 3)
# print(newarr)

# arr = np.array([[[[[[[[1, 2, 3, 4]]]]]]]])

# newarr = arr.reshape(-1)
# print(newarr)

# arr = np.array([[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[1, 2, 3, 4, 5]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]])

# for item1 in arr:
#     for item2 in item1:
#         for item in item2:
#             print(item)

# for item in np.nditer(arr):
#     print(item)

# for item in np.nditer(arr, flags=['buffered'], op_dtypes='f8'):
#     print(item)

# arr = np.array([[1, 2, 3], [4, 5, 6]])

# for idx, item in np.ndenumerate(arr[:, ::2]):
#     print(idx, item)

# arr1 = np.array([[1, 2], [3, 4]])
# arr2 = np.array([[5, 6], [7, 8]])

# # arr = np.concatenate((arr1, arr2))
# # print(arr)
# arr = np.concatenate((arr1, arr2), axis=1)
# print(arr)


# arr1 = np.array([1, 2, 3])
# arr2 = np.array([4, 5, 6])
# arr3 = np.array([7, 8, 9])

# arr = np.dstack((arr1, arr2, arr3))
# print(arr)

# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])

# print(np.split(arr, 2))

# arr = np.array([[1, 2], [3, 4], [5, 6]])
# newarr = np.array_split(arr,2, axis=1)
# print(newarr)
# hsplit - x-axis=1 and vsplit - y-axis=0

# arr = np.array([10, 22, 3, 22, 5, 60, 22, 8, 9, 22, 11, 12])

# elem = np.where(arr%2==0)
# print(elem)


# sarr = np.array([1, 3, 10, 12, 41])

# sort_arr = np.searchsorted(arr, [-1, 39, 42], side='left')
# print(sort_arr)

# arr = np.array([3, 2, 1, -2, 10, 2])

# sorted_arr = np.sort(arr)[::-1]
# print(sorted_arr)

# arr = np.array([[1, -3, 5, 3], [2, 8, -23, 2]])

# sorted_arr = np.sort(arr)[:, ::-1]
# print(sorted_arr)


arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

# filter_arr = []

# for item in arr:
#     if item % 2 == 1:
#         filter_arr.append(True)
#     else:
#         filter_arr.append(False)


# newarr = arr[filter_arr]

filter_arr = arr%2 == 1
print(arr[filter_arr])