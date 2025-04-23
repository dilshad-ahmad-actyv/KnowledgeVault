# arr = [1, 3, 5, 7, 9, 11]

# for val in arr:
#     print(val)

# string slicing
# txt = 'My name is Dilshad Ahmad                                                             '
# txt = txt.replace('D', 'd').replace('A', 'a').replace('M', 'm')
# print(txt.strip())

# txt = 'My name is Dilshad Ahmad'

# txt = list(txt)
# # chars = [word for word in txt if word != ' ']
# print(txt)

# replacements = {
#     'D': 'd',
#     'A': 'a',
#     'M': 'm'
# }

# for old, new in replacements.items():
#     txt = txt.replace(old, new)
# print(txt.strip())

# import re

# txt = 'My name is Dilshad Ahmad                                                             '
# replacements = {
#     'D': 'd',
#     'A': 'a',
#     'i': 'I',
# }

# # Build a regex pattern and replace
# print('|'.join(replacements.keys()))
# pattern = re.compile('|'.join(map(re.escape, replacements.keys())))
# print(pattern)
# txt = pattern.sub(lambda match: replacements[match.group(0)], txt)

# print(txt.strip())

# a = 'Hello'
# b = 'World'
# c = a + ' ' + b

# print(c)

# age = 30
# txt = f'Hello, I am {age:a1f} years old'

# print(txt)


# txt = "We are the so-called \"Vikings\" from the north."
# print(txt)

# print(bool(False))
# print(bool(None))
# print(bool(0))
# print(bool(""))
# print(bool(()))
# print(bool([]))
# print(bool({}))

# class MyClass:
#     def __len__(self):
#         return 1

# obj = MyClass()
# print(isinstance(obj, MyClass))

# fruits = {"apple", "banana"}
# res = 'apple' not in fruits
# print(res)

# res = [(20 + 5) * (5 + 20)]
# print(res)


# data = ['2 5', '3 7', '1 3', '4 0']

# res = [list(map(int, item.split(' '))) for item in data]


# i = 0
# n = 5

# while i < n:
#     print(i)
#     i += 1

# class Person:
#     def __init__(self, firstName, lastName):
#         self.firstName = firstName
#         self.lastName = lastName
    
#     def __str__(self):
#         return f'{self.firstName} {self.lastName}'
    
    
# class Student(Person):
#     def __init__(self, firstName, lastName):
#         super().__init__(firstName, lastName)
        

# student1 = Student('Dilshad', 'Ahmad')

# print(student1)


# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname):
#      Person.__init__(self, fname, lname)
     
# x = Student("Mike", "Olsen")
# x.printname()


# arr = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]]

# res = {n for depth_1 in arr for depth_2 in depth_1 for n in depth_2}
# print(res)

# mytuple = ("apple", "banana", "cherry")

# myIter = iter(mytuple)

# for i in range(len(mytuple)):
#     print(next(myIter))

# class MyNumbers:
#     def __init__(self, nums):
#         self.nums = nums
#         self.index = 0
    
#     def __iter__(self):
#         return self
    
#     def __next__(self):
#         if self.index >= len(self.nums):
#             raise StopIteration()
#         result = self.nums[self.index]
#         self.index += 1
#         return result
    
# nums = [13, 23, 28, 20, 30, 40]
# myNumbers = MyNumbers(nums)
# myIter = iter(myNumbers)

# for x in myIter:
#     print(x)

# def my_generator():
#     for n in range(10):
#         yield n
    
#     def __str__(self):
#         return self.n
        
# # for x in my_generator():
# #     print(x)
# x = my_generator()
# print(x)

# data = [1, 2, 3, 4]


# squares = map( lambda x: x ** 2, data)
# print(list(squares))

# a = b = c = 1
# print(a)
# print(b)
# print(c)

# Literals -> Representation of Fixed Values

# collections literals in python

# # list
# fruits = ['apple', 'orange', 'banana']
# # tuple
# nums = (1, 2, 3)
# # dictionary
# person = {
#     'name': 'John',
#     'age': 30,
#     'city': 'New York'
# }
# # set
# marks = {23, 12, 34}


# num1 = 123  # type: integer -> smaller/lower datatype
# num2 = 1.23 # typ: float -> larger/upper datatype

# num = num1 + num2 # float, implicit(automatic) type conversion

# print(num)
# print(type(num))

# num1 = '123'
# num2 = 1.23
# num = float(num1) + num2 # explicit(mannual) type conversion / type casting

# print(num)
# print(type(num))

# print('Hello World!') # single params
# # print(object= separator= end= file= flush=)
# print("Hello", "Dilshad", end=' ')

# print('Hello', end=' ')
# print('Dilshad')
# print('New Year', 2023, 'See you soon!', sep= '. ')
# for i in range(5):
#     end_param = '\n'
#     if i == 4:
#         end_param = '\n'
#     else:
#         end_param = ' '

#     print(i, i, end=end_param, sep='# ')

# x = 5
# y = 10

# print('The value of x is {1} and y is {0}'.format(x,y))



num = input("Enter a number: ")
print("You have entered {}".format(num))
print(type(num))