// The Prototype Design Pattern is a pattern used in software design to create new objects by copying an existing object, known as the prototype. This is particularly useful when the cost of creating a new instance of an object from scratch is more expensive than copying an existing one. The pattern provides a way to create objects based on a template or blueprint, which can then be customized as needed.
// The Prototype Pattern allows you to create new objects by copying an existing object, known as the prototype, instead of creating from scratch.
// Think of it as: “Don’t build a new one, just duplicate an existing one!”

// Prototype Pattern = Making a copy of an existing object, instead of creating a new one from scratch.
// “I already have something similar — just make a duplicate of it and tweak a few things.”

// Key Concepts of the Prototype Pattern
// 1. Prototype: An object that serves as a prototype for creating other objects.
// 2. Clone: A method used to create a copy of the prototype.
// 3. Client: The code that uses the prototype to create new objects.

// How It Works
// 1. Define a Prototype: Create an object that contains common properties and methods.
// 2. Clone the Prototype: Use the prototype to create new instances, copying the existing object's properties.
// 3. Customize: The newly created objects can be customized or modified without affecting the prototype.

// Real-Life Example in JavaScript
// Let's consider a scenario where you have a complex configuration for creating different types of vehicles, like cars and motorcycles. Instead of creating each vehicle from scratch, you can use a prototype to simplify the creation process.

// Define the Prototype

class Product {
  constructor(
    public name: string,
    public price: number,
    public brand: string
  ) {}

  clone(): Product {
    const product = new Product(this.name, this.price, this.brand);
    return product;
  }

  toString(): string {
    return `${this.name} - ${this.price} - ${this.brand}`;
  }
}

const originalProduct = new Product("5 Star Refrigerator", 15000, "Samsung");

const clone1 = originalProduct.clone();
clone1.name = "3 Star Refrigerator";
clone1.price = 10000;
clone1.brand = "Godrej";

console.log(clone1.toString());
