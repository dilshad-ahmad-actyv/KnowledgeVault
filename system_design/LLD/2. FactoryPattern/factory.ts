// he Factory Pattern provides a way to create objects without exposing the creation logic to the client and refers to the newly created object using a common interface.
// In simple words: You ask a factory for a product, and it gives you the correct one — without you worrying how it was made.

interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log("Drawing a triangle");
  }
}

class ShapeFactory {
  create(type: string) {
    switch (type) {
      case "circle":
        return new Circle();
      case "triangle":
        return new Triangle();
      default:
        throw new Error("Unknown shape type");
    }
  }
}

const factory = new ShapeFactory();

const circle = factory.create("circle");
circle.draw();

const triangle = factory.create("triangle");
triangle.draw();
