import matplotlib.pyplot as plt

months = ['Jan', 'Feb', 'Mar']
revenue = [5000, 6000, 7600]

plt.plot(months, revenue, marker='o', color='green')
plt.title('Monthly Revenue')
plt.xlabel('Month')
plt.ylabel('Revenue in $')
plt.grid(False)
plt.show()
