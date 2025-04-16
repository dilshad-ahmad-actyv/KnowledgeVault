import pandas as pd
import os

file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'data.csv'))

df = pd.read_csv(file_path)

# total_count = df.groupby('id')['id'].count()
id99 = df[df['created_at'].str.contains('2/2025')].values
print(id99)