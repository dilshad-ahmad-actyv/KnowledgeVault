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


// Real-Life Example in JavaScript
// Imagine you have a game where players need to shoot projectiles. Creating and destroying projectiles can be expensive. Instead of creating a new projectile every time one is needed, you can use an object pool to manage and reuse them.

// // Define a Projectile class
// class Projectile {
//   constructor() {
//       this.active = false;
//   }

//   activate() {
//       this.active = true;
//       console.log("Projectile activated");
//   }

//   deactivate() {
//       this.active = false;
//       console.log("Projectile deactivated");
//   }
// }

// // Define the Object Pool
// class ProjectilePool {
//   constructor(size) {
//       this.pool = [];
//       for (let i = 0; i < size; i++) {
//           this.pool.push(new Projectile());
//       }
//   }

//   get() {
//       for (let i = 0; i < this.pool.length; i++) {
//           if (!this.pool[i].active) {
//               this.pool[i].activate();
//               return this.pool[i];
//           }
//       }
//       // If no inactive projectiles, create a new one (optional)
//       const newProjectile = new Projectile();
//       newProjectile.activate();
//       this.pool.push(newProjectile);
//       return newProjectile;
//   }

//   release(projectile) {
//       projectile.deactivate();
//   }
// }

// // Usage example
// const pool = new ProjectilePool(5);

// // Client code: firing projectiles
// const projectile1 = pool.get(); // Gets an inactive projectile from the pool
// const projectile2 = pool.get(); // Gets another inactive projectile from the pool

// // Return projectiles to the pool
// pool.release(projectile1);
// pool.release(projectile2);

// // Inactive projectiles are now available for reuse

// // By using the object pool pattern, you avoid the overhead of frequently creating and destroying projectiles, which can lead to performance improvements, especially in scenarios with high object churn.


// npm install pg
// npm install --save-dev @types/pg

// import { Pool, PoolClient } from 'pg';

// // Step 1: Configure the database connection pool
// const dbPool = new Pool({
//   user: 'your_user',       // Replace with your DB username
//   host: 'localhost',       // Your database host
//   database: 'your_db',     // Your database name
//   password: 'your_password', // Your DB password
//   port: 5432,             // Default PostgreSQL port
//   max: 5,                 // Maximum number of connections in the pool
//   idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
// });

// // Step 2: Function to get a database connection from the pool
// async function getConnection(): Promise<PoolClient> {
//   try {
//     const client = await dbPool.connect();  // Get a connection from the pool
//     console.log('✅ Connection acquired from pool');
//     return client;
//   } catch (error) {
//     console.error('❌ Error acquiring connection:', error);
//     throw error;
//   }
// }

// // Step 3: Function to release the connection back to the pool
// async function releaseConnection(client: PoolClient): Promise<void> {
//   try {
//     client.release();  // Return the connection to the pool
//     console.log('🔄 Connection returned to pool');
//   } catch (error) {
//     console.error('❌ Error releasing connection:', error);
//   }
// }

// // Step 4: Example usage - Querying the database
// async function fetchUsers() {
//   const client = await getConnection();
//   try {
//     const result = await client.query('SELECT * FROM users'); // Example query
//     console.log('📊 Users:', result.rows);
//   } finally {
//     await releaseConnection(client);  // Return the connection to the pool
//   }
// }

// // Step 5: Run example
// fetchUsers();
