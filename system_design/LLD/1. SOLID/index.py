# The SOLID principles are a set of five design principles in object-oriented programming aimed at making software designs more maintainable, scalable, and robust. Let's go over each principle with detailed explanations and real-life examples.

# ---

# ### 1. **Single Responsibility Principle (SRP)**
# - **Definition**: A class should have only one reason to change. In other words, it should have only one responsibility.
# - **Why?**: This makes the class easier to understand, test, and modify without affecting unrelated functionality.

# #### **Real-Life Example**:
# Imagine a restaurant.
# - **Wrong Design**: A single `Restaurant` class handles reservations, cooking, billing, and staff management.
#   ```python
#   class Restaurant:
#       def manage_reservations(self):
#           pass
#       def cook_food(self):
#           pass
#       def generate_bill(self):
#           pass
#   ```
# - **Correct Design**: Split responsibilities into multiple classes:
#   ```python
#   class ReservationManager:
#       def manage_reservations(self):
#           pass

#   class Chef:
#       def cook_food(self):
#           pass

#   class BillingSystem:
#       def generate_bill(self):
#           pass
#   ```

# ---

# ### 2. **Open/Closed Principle (OCP)**
# - **Definition**: A class should be open for extension but closed for modification. This means you can add new functionality without changing existing code.
# - **Why?**: Reduces the risk of breaking existing code when adding new features.

# #### **Real-Life Example**:
# A payment system.
# - **Wrong Design**: Modify a `PaymentProcessor` class every time a new payment method (e.g., PayPal, Stripe) is added.
#   ```python
#   class PaymentProcessor:
#       def process(self, payment_type):
#           if payment_type == "credit_card":
#               pass  # process credit card
#           elif payment_type == "paypal":
#               pass  # process PayPal
#   ```
# - **Correct Design**: Use polymorphism to allow easy extension:
#   ```python
#   from abc import ABC, abstractmethod

#   class PaymentProcessor(ABC):
#       @abstractmethod
#       def process(self):
#           pass

#   class CreditCardPayment(PaymentProcessor):
#       def process(self):
#           print("Processing credit card payment")

#   class PayPalPayment(PaymentProcessor):
#       def process(self):
#           print("Processing PayPal payment")
#   ```

# ---

# ### 3. **Liskov Substitution Principle (LSP)**
# - **Definition**: Subtypes must be substitutable for their base types without altering the correctness of the program.
# - **Why?**: Ensures that derived classes enhance functionality without breaking existing behavior.

# #### **Real-Life Example**:
# A bird classification system.
# - **Wrong Design**: Include non-flying birds in a `Bird` class that assumes all birds can fly.
#   ```python
#   class Bird:
#       def fly(self):
#           pass

#   class Penguin(Bird):
#       def fly(self):
#           raise Exception("Penguins can't fly")
#   ```
# - **Correct Design**: Use specific subtypes:
#   ```python
#   class Bird:
#       pass

#   class FlyingBird(Bird):
#       def fly(self):
#           pass

#   class NonFlyingBird(Bird):
#       pass

#   class Penguin(NonFlyingBird):
#       pass
#   ```

# ---

# ### 4. **Interface Segregation Principle (ISP)**
# - **Definition**: A class should not be forced to implement interfaces it does not use. Instead, create smaller, specific interfaces.
# - **Why?**: Reduces unnecessary code and dependencies.

# #### **Real-Life Example**:
# A printer that can scan, fax, and print.
# - **Wrong Design**: A single `Printer` interface forces all printers to implement all methods.
#   ```python
#   class Printer:
#       def print(self):
#           pass
#       def scan(self):
#           pass
#       def fax(self):
#           pass
#   ```

# - **Correct Design**: Split into specific interfaces:
#   ```python
#   class Printer:
#       def print(self):
#           pass

#   class Scanner:
#       def scan(self):
#           pass

#   class FaxMachine:
#       def fax(self):
#           pass
#   ```

# ---

# ### 5. **Dependency Inversion Principle (DIP)**
# - **Definition**: High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
# - **Why?**: Makes the code flexible and reduces coupling between components.

# #### **Real-Life Example**:
# A notification system that can send emails and SMS.
# - **Wrong Design**: The high-level `Notification` class depends directly on low-level `EmailSender` and `SmsSender`.
#   ```python
#   class EmailSender:
#       def send_email(self, message):
#           pass

#   class SmsSender:
#       def send_sms(self, message):
#           pass

#   class Notification:
#       def send(self, message, method):
#           if method == "email":
#               EmailSender().send_email(message)
#           elif method == "sms":
#               SmsSender().send_sms(message)
#   ```

# - **Correct Design**: Use abstraction for communication:
#   ```python
#   from abc import ABC, abstractmethod

#   class MessageSender(ABC):
#       @abstractmethod
#       def send(self, message):
#           pass

#   class EmailSender(MessageSender):
#       def send(self, message):
#           print("Sending email:", message)

#   class SmsSender(MessageSender):
#       def send(self, message):
#           print("Sending SMS:", message)

#   class Notification:
#       def __init__(self, sender: MessageSender):
#           self.sender = sender

#       def send(self, message):
#           self.sender.send(message)

#   # Usage
#   email_sender = EmailSender()
#   sms_sender = SmsSender()

#   Notification(email_sender).send("Hello via Email")
#   Notification(sms_sender).send("Hello via SMS")
