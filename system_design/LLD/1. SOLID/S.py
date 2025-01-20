
# The SOLID principles are a set of five design principles in object-oriented programming aimed at making software designs more maintainable, scalable, and robust. Let's go over each principle with detailed explanations and real-life examples.

# 1. Single Responsibility Principle (SRP)
# Definition: A class should have only one reason to change. In other words, it should have only one responsibility.
# Why?: This makes the class easier to understand, test, and modify without affecting unrelated functionality.

# eg.
# Imagine a restaurant.

# Wrong Design: A single Restaurant class handles reservations, cooking, billing, and staff management.

class Restaurant:
    def manage_reservations(self):
        pass
    def cook_food(self):
        pass
    def generate_bill(self):
        pass
    
    # correct design
    class ReservationManager:
        def manage_reservations(self):
            pass
        
    class Chef:
        def cook_food(self):
            pass
    
    class BillingSystem:
        def generate_bill(self):
            pass