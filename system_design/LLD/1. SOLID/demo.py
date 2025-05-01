# from abc import ABC, abstractmethod

# class Eatable(ABC):
#     @abstractmethod
#     def eat(self): 
#         pass

# class Donut(Eatable):
#     def __init__(self, flavor: str, size: str):
#         self.flavor = flavor
#         self.size = size

#     def describe(self):
#         print(f'Donut with {self.flavor} {self.size}')
    
#     def eat(self):
#         print(f'Eating {self.flavor}')

    
# chocoDonut = Donut('chocolate donut', 'medium')

# # print(chocoDonut)
# chocoDonut.describe()
# chocoDonut.eat()


# from abc import ABC, abstractmethod

# class IPizza(ABC):
#     def cook(self) -> str:
#         pass

# class Pizza (IPizza):
#     def __init__(self, name: str, size: str):
#         self.name = name
#         self.size = size
    
#     def getDescription(self) -> str:
#         return f'{self.name} {self.size} pizza'
    

# class VegPizza(Pizza):
#     def cook(self) -> str:
#         return f'Cooking veg pizza: {self.getDescription()}'

# class NonVegPizza(Pizza):
#     def cook(self) -> str:
#         return f'Cooking non-veg pizza: {self.getDescription()}'
    
# orders = [
#     VegPizza('Margrita', 'large'),
#     NonVegPizza('Pepperoni', 'medium')
# ]


# for order in orders:
#     print(order.cook())




# Payment Processig System

from abc import ABC, abstractmethod

class IPayment(ABC):
    @abstractmethod
    def process(self, amount: float):
        pass

class CreditCardPayment(IPayment):
    def process(self, amount: float):
        print(f'Amount {amount} is processing through Credit card.')
    
class DebitCardPayment(IPayment):
    def process(self, amount: float):
        print(f'Amount {amount} is processing through Debit card.')

class PaymentService:
    def __init__(self, payment_method: IPayment):
        self.payment_method = payment_method
    
    def pay_bill(self, amount: float):
        self.payment_method.process(amount)


creditCardPayment = CreditCardPayment()
amount = 10000
payment = PaymentService(creditCardPayment)
payment.pay_bill(amount)