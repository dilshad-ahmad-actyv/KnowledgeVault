// // Donut design

// interface Eatable {
//   eat(): void;
// }

// class Donut implements Eatable {
//   constructor(private readonly flavor: string, private readonly size: string) {}

//   describe(): void {
//     console.log(`Donut is a ${this.flavor} and ${this.size}.`);
//   }
//   eat(): void {
//     console.log(`Eating donut with ${this.flavor} flavor.`);
//   }
// }

// const chocoDonut = new Donut("chocolate", "small");
// console.log(chocoDonut);
// chocoDonut.describe();
// chocoDonut.eat();

// Order pizza

// interface IPizza {
//   cook(): string;
// }

// abstract class Pizza implements IPizza {
//   constructor(private readonly name: string, private readonly size: string) {}

//   getDescription(): string {
//     return `${this.name} ${this.size} pizza`;
//   }

//   abstract cook(): string;
// }

// class VegPizza extends Pizza {
//   cook(): string {
//     return `Cooking veg pizza: ${this.getDescription()}`;
//   }
// }

// class NonVegPizza extends Pizza {
//   cook(): string {
//     return `Cooking non-veg pizza: ${this.getDescription()}`;
//   }
// }

// const order: Pizza[] = [
//   new VegPizza("Margherita", "small"),
//   new NonVegPizza("Pepperoni", "medium"),
// ];

// const desc = order.map((pizza) => pizza.cook());

// console.log(desc);

//==================================================================
// Payment processing System

interface IPayment {
  process(amount: number): void;
}

class CrediCardPayment implements IPayment {
  process(amount: number): void {
    console.log(
      `Payment of ${amount} amount is processing using card payment system.`
    );
  }
}

class UPIPayment implements IPayment {
  process(amount: number): void {
    console.log(
      `Payment of ${amount} amount is processing using UPI payment system.`
    );
  }
}

class DebitCardPayment implements IPayment {
  process(amount: number): void {
    console.log(
      `Payment of ${amount} amount is processing using Debit card system.`
    );
  }
}

class PaymentService {
  constructor(private paymentMethod: IPayment) {}

  payBill(amount: number) {
    this.paymentMethod.process(amount);
  }
}

const upi = new UPIPayment();
const debit = new DebitCardPayment();
const credit = new CrediCardPayment();
const payment = new PaymentService(credit);
payment.payBill(1000);
