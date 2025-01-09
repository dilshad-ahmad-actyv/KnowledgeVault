import pandas as pd
# import numpy as np
# pd.options.display.max_rows = 9999
data = pd.read_csv('annual-enterprise-survey-2023-financial-year-provisional.csv')

# print(data.head(2))
# print(data.tail(2))
print(data.corr)

# myData = {
#     'cars': ['BMW', 'Volvo', 'VW', 'Maruthi'],
#     'passings': [23, 36, 40, 53]
# }

# # data = pd.DataFrame(myData)
# # print(data)

# print(pd.__version__)

# myarr = [1,3, 5, 7]

# x = pd.Series(myarr, index=['x', 'y', 'z', 'm'])
# print(x)


# calories = {"day1": 420, "day2": 380, "day3": 390}

# myvar = pd.Series(calories, index=['day2'])

# print(myvar)

# jsp = pd.read_json('data.json')
# print(jsp)

# data = {
#   "Duration":{
#     "0":60,
#     "1":60,
#     "2":60,
#     "3":45,
#     "4":45,
#     "5":60
#   },
#   "Pulse":{
#     "0":110,
#     "1":117,
#     "2":103,
#     "3":109,
#     "4":117,
#     "5":102
#   },
#   "Maxpulse":{
#     "0":130,
#     "1":145,
#     "2":135,
#     "3":175,
#     "4":148,
#     "5":127
#   },
#   "Calories":{
#     "0":409,
#     "1":479,
#     "2":340,
#     "3":282,
#     "4":406,
#     "5":300
#   }
# }

# x = pd.DataFrame(data)
# print(x)