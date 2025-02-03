from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass
    
class Circle(Shape):
    def draw(self):
        return "Drawing the circle"

class Rectangle(Shape):
    def draw(self):
        return "Drawing the rectangle"
    
class ShapeFactory:
    @staticmethod
    def get_shape(shape_type):
        if shape_type == "circle":
            return Circle()
        elif shape_type == 'rectangle':
            return Rectangle()
        else:
            return ValueError("Shape type is invalid.")
        
# client code

shape_factory = ShapeFactory()
circle = shape_factory.get_shape('circle')
rectangle = shape_factory.get_shape('rectangle')
print(circle.draw())
print(rectangle.draw())