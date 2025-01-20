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


class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
     Person.__init__(self, fname, lname)
     
x = Student("Mike", "Olsen")
x.printname()
