// he Factory Pattern provides a way to create objects without exposing the creation logic to the client and refers to the newly created object using a common interface.
// In simple words: You ask a factory for a product, and it gives you the correct one — without you worrying how it was made.
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle");
    };
    return Circle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Drawing a triangle");
    };
    return Triangle;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.create = function (type) {
        switch (type) {
            case "circle":
                return new Circle();
            case "triangle":
                return new Triangle();
            default:
                throw new Error("Unknown shape type");
        }
    };
    return ShapeFactory;
}());
var factory = new ShapeFactory();
var circle = factory.create("circle");
circle.draw();
var triangle = factory.create("triangle");
triangle.draw();
