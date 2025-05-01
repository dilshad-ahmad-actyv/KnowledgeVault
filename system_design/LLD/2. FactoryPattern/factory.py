from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Shape):
    def draw(self):
        print(f'Drawing the circle')

class Square(Shape):
    def draw(self):
        print(f'Drawing the square')

class ShapeFactory:
    def create(self, type):
        match type:
            case 'circle':
                return Circle()
            case 'square':
                return Square()
            case _:
                raise Exception('Unknown shape type')
    
    def get_shape(self, type):
        shape = self.create(type)
        return shape.draw()
            

factory = ShapeFactory()
factory.get_shape('circle')
factory.get_shape('square')