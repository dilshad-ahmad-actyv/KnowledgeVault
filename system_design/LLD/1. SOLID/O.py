# Open/Closed Principle (OCP)
# Definition: A class should be open for extension but closed for modification. This means you can add new functionality without changing existing code.
# Why?: Reduces the risk of breaking existing code when adding new features.

# a payment system

# wrong design
# class PaymentProcessor:
#     def process(self, payment_type):
#         if payment_type == 'Create_Card':
#             pass
#         elif payment_type == 'Paypal':
#             pass
        

# correct design        
from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def process(self):
        pass

class CreditCardPaymentProcessor(PaymentProcessor):
    def process(self):
        print('Payment is processing through credit cart.')
    
class PayPalPaymentProcessor(PaymentProcessor):
    def process(self):
        print('Payment is processing through PayPal.')