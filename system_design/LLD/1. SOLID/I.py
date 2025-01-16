# Definition: A class should not be forced to implement interfaces it does not use. Instead, create smaller, specific interfaces.

# wrong design
class Printer:
    def print(self):
        pass
    
    def fax(self):
        pass
    
    def scan(self):
        pass
    
# correct design

class Printer:
    def print(self):
        pass

class FaxMachine:
    def fax(self):
        pass

class Scanner:
    def scan(self):
        pass