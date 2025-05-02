// Ojbect Pool Design Pattern - it manages the pool of reusable objects like DB connection object.
// Borrow from the pool -> use it -> then return it back to the pool
// Object Pool Design is always used with  the Singleton design pattern and requires thread safety while acquiring and releasing the resources.
// The Object Pool Design Pattern is a pattern used in software design to manage the reuse of objects, which can be expensive to create and destroy frequently. Instead of creating and destroying objects on demand, a pool of reusable objects is maintained, which helps in improving performance and resource management.

// Key Concepts of the Object Pool Pattern
// 1. Object Pool: A container that holds a set of reusable objects.
// 2. Objects: Typically, these are expensive to create or manage resources that should be reused rather than recreated.
// 3. Client: The code that uses the objects from the pool.

// How It Works
// 1. Initialization: A pool is initialized with a set number of objects.
// 2. Checkout: When a client needs an object, it checks out an object from the pool.
// 3. Usage: The client uses the object.
// 4. Check-in: When the client is done with the object, it checks the object back into the pool.
// 5. Reuse: The pool provides the checked-in object to other clients who need it.

// | Use Case                   | Description |
// |----------------------------|-------------|
// | **Database Connections**   | Pooling DB connections for performance and resource control |
// | **Thread Pools**           | Reusing threads in multi-threaded environments |
// | **Game Development**       | Pooling bullets, enemies, or UI objects instead of creating every time |
// | **Network Sockets**        | Reusing socket connections in network-heavy apps |
// | **Machine Learning Inference** | Reusing model instances on GPU to save memory and load time |

class Connection {
  inUse: boolean = false;
  constructor(public id: number) {}

  connect(): void {
    console.log(`Connection ${this.id} is now active.`);
  }

  disconnect(): void {
    console.log(`Connection ${this.id} is now released.`);
  }
}

class ConnectionPool {
  private pool: Connection[] = [];
  constructor(public size: number) {
    for (let i = 1; i <= size; i++) {
      this.pool.push(new Connection(i));
    }
  }

  acquire(): Connection | null {
    let available: Connection | undefined;

    for (const conn of this.pool) {
      if (!conn.inUse) {
        available = conn;
        break;
      }
    }

    if (!available) {
      console.log("No available connections");
      return null;
    }

    available.inUse = true;
    available.connect();
    return available;
  }

  release(conn: Connection): void {
    conn.inUse = false;
    conn.disconnect();
  }
}

const pool = new ConnectionPool(2);

const conn1 = pool.acquire();
const conn2 = pool.acquire();

if (conn1) pool.release(conn1);

const conn3 = pool.acquire();
