// Queue using two stacks

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length) {
    const elem = this.stack1.pop();
    this.stack2.push(elem);
  }

  this.stack1.push(x);

  while (this.stack2.length) {
    const elem = this.stack2.pop();
    this.stack1.push(elem);
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const ans = this.stack1.pop();
  return ans;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const size = this.stack1.length;
  return this.stack1[size - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Queue using one stack only
// it's almost not possible for large inputs- it could be only when use any data structure which provides pop from front else you can use recursive solution.
