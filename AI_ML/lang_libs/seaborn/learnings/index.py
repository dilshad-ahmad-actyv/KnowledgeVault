import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# Survey results
data = pd.DataFrame({
    'age': [25, 34, 45, 23, 35, 44, 36, 50],
    'satisfaction_score': [3, 4, 2, 5, 4, 3, 4, 2]
})

# Plot the distribution
sns.histplot(data['satisfaction_score'], kde=True)

# Show correlation between age and score
sns.scatterplot(data=data, x='age', y='satisfaction_score')

plt.show()