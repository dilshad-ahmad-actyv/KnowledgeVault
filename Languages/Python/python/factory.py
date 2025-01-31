# product interface
class Shape:
    def draw(self):
        pass
    
# concrete product
class Circle(Shape):
    def draw(self):
        return "Drawing a circle"
        
class Rectangle(Shape):
    def draw(self):
        return "Drawing a rectangle"

class Square(Shape):
    def draw(self):
        return 'Drawing a square'
    
# creator
class ShapeFactory:
    @staticmethod
    def get_shape(shape_type):
        match shape_type :
            case "circle":
                return Circle()
            case "rectangle":
                return Rectangle()
            case "square":
                return Square()
            case _:
                return None
            
# client interface
shape = ShapeFactory()

circle = shape.get_shape('circle')
rectangle = shape.get_shape('rectangle')
print(circle.draw())
print(rectangle.draw())