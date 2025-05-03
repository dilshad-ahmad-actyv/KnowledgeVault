// var MyStack = function () {};

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   if (this.queue1.length === 0) {
//     if (x) this.queue2.push(x);
//   } else {
//     while (this.queue1.length) {
//       this.queue2.push(this.queue1.shift());
//     }
//     if (x) this.queue2.push(x);
//   }
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   if (!this.empty()) {
//     this.push(null);
//     while (this.queue2.length >= 1) {
//       this.queue1.push(this.queue2.shift());
//     }
//   } else {
//     if (this.queue2.length) {
//       while (this.queue2.length >= 1) {
//         this.queue1.push(this.queue2.shift());
//       }
//     } else {
//       this.push(null);
//       this.pop();
//     }
//   }

//   return this.queue2.shift();
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   if (!this.empty()) {
//     if (this.queue2.length) {
//       while (this.queue2.length >= 1) {
//         this.queue1.push(this.queue2.shift());
//       }
//     } else {
//       this.push(null);
//       this.pop();
//     }
//   }

//   return this.queue2[0];
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return this.queue1.length === 0 && this.queue2.length === 0;
// };

// MyStack.prototype.queue1 = [];
// MyStack.prototype.queue2 = [];
// const obj = new MyStack();

// obj.push(4);
// obj.push(3);
// obj.push(1);
// obj.pop();
// obj.push(9);
// obj.top();
// obj.push(10);
// console.log(obj.top());
// console.log(obj.queue1, obj.queue2);

// var MyStack = function () {
//   this.queue1 = [];
//   this.queue2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   if (this.queue1.length === 0) {
//     this.queue1.push(x);
//   } else {
//     while (this.queue1.length) {
//       this.queue2.push(this.queue1.shift());
//     }
//     this.queue1.push(x);

//     while (this.queue2.length) {
//       this.queue1.push(this.queue2.shift());
//     }
//   }
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   if (this.queue1.length > 0) {
//     return this.queue1.shift();
//   }
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   if (this.queue1.length > 0) {
//     return this.queue1[0];
//   }
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return this.queue1.length === 0;
// };

// const obj = new MyStack();

// using one queu1 only

var MyStack = function () {
  this.q1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q1.length) {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q1.push(this.q1.shift());
    }

    return this.q1.shift();
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.q1.length) {
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q1.push(this.q1.shift());
    }
    const top = this.q1.shift();
    this.q1.push(top);
    return top;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

const obj = new MyStack();

obj.push(2);
obj.push(3);
obj.push(5);
obj.push(9);
obj.pop();
console.log(obj.top());
// console.log(obj.empty());

console.log(obj);
