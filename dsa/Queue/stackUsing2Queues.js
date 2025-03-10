var MyStack = function () {};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queue1.length === 0) {
    if (x) this.queue2.push(x);
  } else {
    while (this.queue1.length) {
      this.queue2.push(this.queue1.shift());
    }
    if (x) this.queue2.push(x);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.empty()) {
    this.push(null);
    while (this.queue2.length >= 1) {
      this.queue1.push(this.queue2.shift());
    }
  } else {
    if (this.queue2.length) {
      while (this.queue2.length >= 1) {
        this.queue1.push(this.queue2.shift());
      }
    } else {
      this.push(null);
      this.pop();
    }
  }

  return this.queue2.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.empty()) {
    if (this.queue2.length) {
      while (this.queue2.length >= 1) {
        this.queue1.push(this.queue2.shift());
      }
    } else {
      this.push(null);
      this.pop();
    }
  }

  return this.queue2[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0 && this.queue2.length === 0;
};

MyStack.prototype.queue1 = [];
MyStack.prototype.queue2 = [];
const obj = new MyStack();

obj.push(4);
obj.push(3);
obj.push(1);
obj.pop();
obj.push(9);
obj.top();
obj.push(10);
console.log(obj.top());
console.log(obj.queue1, obj.queue2);
