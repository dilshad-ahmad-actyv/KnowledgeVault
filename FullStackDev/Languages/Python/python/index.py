import csv

# with open('people.csv', 'r') as file:
#     data = csv.reader(file)
    
#     for row in data:
#         print(row)


with open('movie.csv', 'w', newline='') as file:
    writer = csv.writer(file)

    writer.writerow(['SN', 'Title', 'Year', 'Ratings'])
    writer.writerow(['1', 'Tare Zameen Par', 2009, 9])
    writer.writerow(['2', 'Sitare Zameen Par', 2025, 9.9])