# Liskov substitution principle

# Wrong Design
# class Bird:
#     def fly(self):
#         pass
    
# class Sparrow(Bird):
#     def fly(self):
#         print('Sparrow can fly.')
        
# class Penguin(Bird):
#     def fly(self):
#         print('Penguin cannot fly.')


# Correct Design

class Bird:
    pass

class FlyingBird(Bird):
    def fly(self):
        pass

class NonFlyingBird(Bird):
    pass

class Sparrow(FlyingBird):
    def fly(self):
        print('Sparrow can fly.')
    
class Penguin(NonFlyingBird):
    pass