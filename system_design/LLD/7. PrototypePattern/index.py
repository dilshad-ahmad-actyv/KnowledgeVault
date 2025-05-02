# The Prototype Design Pattern is a pattern used in software design to create new objects by copying an existing object, known as the prototype. This is particularly useful when the cost of creating a new instance of an object from scratch is more expensive than copying an existing one. The pattern provides a way to create objects based on a template or blueprint, which can then be customized as needed.
# The Prototype Pattern allows you to create new objects by copying an existing object, known as the prototype, instead of creating from scratch.
# Think of it as: “Don’t build a new one, just duplicate an existing one!”

# Key Concepts of the Prototype Pattern
# 1. Prototype: An object that serves as a prototype for creating other objects.
# 2. Clone: A method used to create a copy of the prototype.
# 3. Client: The code that uses the prototype to create new objects.

# How It Works
# 1. Define a Prototype: Create an object that contains common properties and methods.
# 2. Clone the Prototype: Use the prototype to create new instances, copying the existing object's properties.
# 3. Customize: The newly created objects can be customized or modified without affecting the prototype.

# Real-Life Example in JavaScript
# Let's consider a scenario where you have a complex configuration for creating different types of vehicles, like cars and motorcycles. Instead of creating each vehicle from scratch, you can use a prototype to simplify the creation process.

# Define the Prototype

# Prototype Pattern = Making a copy of an existing object, instead of creating a new one from scratch.
# “I already have something similar — just make a duplicate of it and tweak a few things.”

import copy

class Product:
    def __init__(self, name: str, price: float, brand: str):
        self.name = name
        self.price = price
        self.brand = brand

    def clone(self):
        return copy.deepcopy(self)
    def __str__(self):
        return f'{self.name} - {self.price} - {self.brand}'

original_product = Product('Tube Light', 500, 'Philips')
object1 = original_product.clone()
object1.name = "LCD TV"
object1.price = 12000
object1.brand = "LG"
print(object1)