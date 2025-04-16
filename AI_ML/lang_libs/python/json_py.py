import re
# import json

# data = '{ "name":"John", "age":30, "city":"New York"}'

# # Convert JSON string to Python dictionary
# res = json.loads(data)
# print(res['name'])

# x = {
#   "name": "John",
#   "age": 30,
#   "city": "New York"
# }

# y = json.dumps(x)
# print(x)

# name = 'The rain in Spain'
# x = re.search('The.*Spin$', name)

# print(x)
# if x:
#     print('Match found')
# else:
#     print('No match')
print('Enter the name: ')
user_input = input()
response = f"Hello {user_input}"
print(response)