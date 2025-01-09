// // linear queue vs circular queue
// class LinearQueue {
//   front = -1;
//   rear = -1;
//   queue = Array(5);
//   size = this.queue.length;
//   enqueue(value) {
//     if (this.isEmpty()) {
//       this.front = 0;
//       this.rear = 0;
//       this.queue[this.rear] = value;
//     } else if (this.isFull()) {
//       console.log(this.rear, this.size);
//       console.log("Queue overflow!");
//     } else {
//       this.rear++;
//       this.queue[this.rear] = value;
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("Queue underflow!");
//     } else if (this.front === this.rear) {
//       this.front = -1;
//       this.rear = -1;
//     } else {
//       this.front++;
//     }
//   }
//   peek() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty!");
//     } else {
//       return this.queue[this.front];
//     }
//   }
//   isFull() {
//     if (this.rear === this.size - 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   isEmpty() {
//     if (this.front === -1 && this.rear === -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   traverse() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty!");
//     } else {
//       for (let i = this.front; i <= this.rear; i++) {
//         console.log(this.queue[i]);
//       }
//     }
//   }
// }

// // const queue = new LinearQueue();
// // queue.enqueue(1);
// // queue.enqueue(2);
// // queue.enqueue(3);
// // queue.enqueue(4);
// // queue.enqueue(5);
// // queue.enqueue(6);

// // Circular queue

// class CircularQueue {
//   front = -1;
//   rear = -1;
//   queue = Array(5);
//   size = this.queue.length;

//   enqueue(value) {
//     if (this.isEmpty()) {
//       this.front = 0;
//       this.rear = 0;
//       this.queue[this.rear] = value;
//     } else if (this.isFull()) {
//       console.log("Queue Overflow!");
//     } else {
//       this.rear = (this.rear + 1) % this.size;
//       this.queue[this.rear] = value;
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("Queue underflow!");
//     } else if (this.front === this.rear) {
//       this.front = -1;
//       this.rear = -1;
//     } else {
//       this.front = (this.front + 1) % this.size;
//     }
//   }
//   isEmpty() {
//     if (this.front === -1 && this.rear === -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   isFull() {
//     const condition = (this.rear + 1) % this.size === this.front;
//     if (condition) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   traverse() {
//     let i = this.front;
//     while (i !== this.rear) {
//       console.log(this.queue[i]);
//       i = (i + 1) % this.size;
//     }
//     console.log(this.queue[this.rear]);
//   }
// }

// const queue = new CircularQueue();
// queue.enqueue(10);
// queue.enqueue(9);
// queue.enqueue(12);
// queue.enqueue(3);
// queue.enqueue(20);
// queue.dequeue();
// queue.enqueue(21);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(22);
// queue.enqueue(20);
// queue.enqueue(200);
// queue.enqueue(25);
// queue.traverse();

class Queue {
  constructor() {
    this.data = [];
    this.len = 5;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(val) {
    if (this.isFull()) {
      return "Overflow";
    }
    if (this.isEmpty()) {
      this.front++;
      this.rear++;
      this.data[this.rear] = val;
    } else {
      this.rear++;
      this.data[this.rear] = val;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    this.front--;
  }

  peek() {
    if (this.isEmpty) {
      return "Empty";
    }
    return this.data[this.front];
  }

  isEmpty() {
    return this.front === -1 ? true : false;
  }
  isFull() {
    return this.len === this.rear ? true : false;
  }
  display() {
    if (this.isEmpty()) {
      return "Empty";
    }
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.data[i]);
    }
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(10);

console.log(queue.display());
