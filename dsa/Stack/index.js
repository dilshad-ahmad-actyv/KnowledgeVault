// class StackOperation {
//   index = -1;
//   stack = Array(5);
//   size = this.stack.length;
//   //   constructor(value) {
//   //     this.value = value;
//   //   }

//   push(value) {
//     if (this.isFull()) {
//       return "Stack OverFlow";
//     } else {
//       this.index++;
//       this.stack[this.index] = value;
//     }
//   }

//   pop() {
//     if (this.index === -1) {
//       return "Stack underflow";
//     } else {
//       this.index--;
//     }
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is Empty!";
//     } else {
//       return this.stack[this.index];
//     }
//   }

//   isFull() {
//     if (this.index === this.size - 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isEmpty() {
//     if (this.index === -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   traverse() {
//     if (this.isEmpty()) {
//       return "Stack is Empty!";
//     } else {
//       for (let i = this.index; i >= 0; i--) {
//         const val = this.stack[i];
//         console.log(val);
//       }
//     }
//   }
// }

// function inputTaker(stack, choice = 0, value) {
//   let result;

//   switch (choice) {
//     case 1:
//       result = stack.push(value);
//       break;
//     case 2:
//       result = stack.pop();
//       break;
//     case 3:
//       result = stack.peek();
//       break;
//     case 4:
//       result = stack.traverse();
//       break;
//     case 5:
//       result = stack.isFull();
//       break;
//     case 6:
//       result = stack.isEmpty();
//       break;
//     default:
//       result = "OOPs!, Invalid Choice";
//       break;
//   }
//   return result;
// }
// const stack = new StackOperation();
// inputTaker(stack, 1, 10);
// inputTaker(stack, 1, 20);
// inputTaker(stack, 1, 30);
// inputTaker(stack, 1, 60);
// inputTaker(stack, 1, 100);
// const push = inputTaker(stack, 1, 130);
// inputTaker(stack, 1, 120);
// // const top = inputTaker(stack, 3);
// console.log(push);
// inputTaker(stack, 4);

// class Stack {
//   constructor() {
//     this.data = [];
//     this.top = -1;
//     this.len = 5;
//   }

//   push(val) {
//     if (this.isFull()) {
//       return "Overflow!";
//     }
//     this.top += 1;
//     this.data[this.top] = val;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Underflow!";
//     }
//     this.top -= 1;
//   }
//   peek() {
//     return this.data[this.top];
//   }
//   isFull() {
//     return this.data.length === this.len ? true : false;
//   }
//   isEmpty() {
//     return this.data.length === 0 ? true : false;
//   }
//   display() {
//     for (let i = 0; i <= this.top; i++) {
//       console.log(this.data[i]);
//     }
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(3);
// // stack.pop();
// // stack.display();
// console.log(stack.peek());

class Stack {
  constructor(n) {
    this.pointer = -1;
    this.size = n;
    this.stack = [];
  }

  push(val) {
    if (this.pointer === this.size - 1) {
      throw Error("Stack Overflow!");
    } else {
      this.pointer++;
      this.stack[this.pointer] = val;
    }
  }
  pop() {
    if (this.pointer === -1) {
      throw Error("Stack Underflow!");
    } else {
      this.pointer--;
    }
  }
  peek() {
    if (this.pointer === -1) {
      throw Error("Stack is Empty!");
    } else {
      return this.stack[this.pointer];
    }
  }
  display() {
    let print = [];
    let cnt = 0;
    for (let i = this.pointer; i >= 0; i--) {
      print[cnt++] = String(this.stack[i]);
    }
    return print.join(" ");
  }
  isEmpty() {
    return this.pointer === -1;
  }
  isFull() {
    return this.pointer === this.size - 1;
  }
}

const stack = new Stack(5);
stack.push(11);
stack.push(2);
stack.push(3);
stack.push(9);
stack.push(10);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.isFull());
console.log(stack.display());
console.log(stack);
