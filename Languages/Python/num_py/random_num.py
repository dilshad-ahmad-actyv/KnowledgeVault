# import seaborn as sns
# import matplotlib.pyplot as plt


# # # x = random.rand(6, 3)
# # # x = random.randint(100, size=(3, 2))
# # x = random.choice([2, 4, 8, 10], size=(3, 2))

# # print(x)

# from numpy import random

# x = random.choice([3, 7, 8, 1], p=[0.2, 0.7, 0.1, 0.0], size=(4, 4))

# print(x)

# arr = np.array([3, 5, 2, 1, 9])
# # random.shuffle(arr)
# x = random.permutation(arr)
# print(x)

# sns.displot([0, 1, 2, 3, 4, 5],  kind='hist')
# # plt.show()

# import numpy as np
# import matplotlib.pyplot as plt

# # Generate random heights (in cm)
# heights = np.random.normal(loc=170, scale=10, size=1000)  # mean=170, std=10

# # Create a histogram to visualize the distribution
# plt.hist(heights, bins=30, alpha=0.7, color='gray')
# plt.title('Height Distribution')
# plt.xlabel('Height (cm)')
# plt.ylabel('Frequency')
# plt.show()


# from numpy import random
# import matplotlib.pyplot as plt
# import seaborn as sns
# # x = random.binomial(n=10, p=0.5, size=10) # discrete distribution

# sns.distplot(random.binomial(n=10, p=0.5, size=10), kde=False)
# plt.show()
# print(x)

# from numpy import random
# import matplotlib.pyplot as plt
# import seaborn as sns

# import matplotlib.pyplot as plt
# import seaborn as sns

# sns.distplot(random.normal(loc=50, scale=5, size=1000), hist=False, label='normal')
# sns.distplot(random.binomial(n=100, p=0.5, size=1000), hist=False, label='binomial')

# plt.show()
# print(random.normal(loc=50, scale=5, size=100))
# print(random.binomial(n=100, p=0.5, size=100))

# x = random.poisson(lam=2, size=1000)
# sns.displot(x, kde=False)
# plt.show()
# print(x)

# sns.distplot(random.normal(loc=50, scale=7, size=1000), hist=False, label='Normal')
# sns.distplot(random.binomial(n=1000, p=0.01, size=1000), hist=False, label='Binomial')
# sns.distplot(random.poisson(lam=10, size=1000), hist=False, label='Poisson')
# plt.show()

# x = random.uniform(size=1000)
# sns.distplot(x, hist=False)
# plt.show()

# import pandas as pd

# data = {
#    'Name': ['Alice', 'Bob', 'Charlie'],
#     'Age': [24, 30, 22],
#     'Grade': ['A', 'B', 'A']
# }


# pf = pd.DataFrame(data)
# print(pf)

# import seaborn as sns
# import matplotlib.pyplot as plt

# # Load an example dataset
# tips = sns.load_dataset("tips")

# # Create a scatter plot
# sns.scatterplot(data=tips, x='total_bill', y='tip', hue='day')
# plt.title('Tips by Total Bill')
# plt.show()

