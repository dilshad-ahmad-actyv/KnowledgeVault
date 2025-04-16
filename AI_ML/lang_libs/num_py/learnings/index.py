import numpy as np

temp = np.random.normal(loc=25, scale=5, size=30*25*60*60)
print(temp)

avg_temp = np.mean(temp)
print(avg_temp)

smoothed = np.convolve(temp, np.ones(100)/100, mode='valid')
print(smoothed)