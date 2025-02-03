#1. Product class
class Computer:
    def __init__(self):
        self.parts = {}
    
    def add_part(self, key, value):
        self.parts[key] = value
    
    def get_specs(self):
        return self.parts
    
# 2. Builder Class
class ComputerBuilder:
    def __init__(self):
        self.computer = Computer()
    
    def set_processor(self, processor):
        self.computer.add_part('Processor', processor)
    
    def set_ram(self, ram):
        self.computer.add_part('RAM', ram)
        
    def set_storage(self, storage):
        self.computer.add_part('Storage', storage)
    
    def get_computer(self):
        return self.computer
    
# 3. Director Class
class Director:
    def __init__(self, builder):
        self.builder = builder
    
    def build_gaming_computer(self):
        self.builder.set_processor('Intel Core i7')
        self.builder.set_ram('8GB')
        self.builder.set_storage('256GB SSD')
    
    def build_workstation_computer(self):
        self.builder.set_processor('AMD Ryzen 5 3600')
        self.builder.set_ram('16GB')
        self.builder.set_storage('1TB SSD')
        

# 3. client code

# create gaming computer
builder = ComputerBuilder()
director = Director(builder)

director.build_gaming_computer()
gaming_computer = builder.get_computer()
print("Gaming computer", gaming_computer.get_specs())