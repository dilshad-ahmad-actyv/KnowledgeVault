# def myFunc():
#     global x
#     x = 30
#     print(x)

# myFunc()

# print(x)

def myfunc1():
#   global x
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1())
# print(x)