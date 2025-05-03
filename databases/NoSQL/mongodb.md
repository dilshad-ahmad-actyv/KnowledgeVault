## ✅ **Beginner Level (Foundations)**

### 🔹 Basics

- What is MongoDB? and its features

  - Non-relational, schema-less
  - Stores data in key-value pairs and supports nested documents
  - document-oriented NoSQL database
  - MongoDB stores data in flexible, JSON-like documents called BSON (Binary JSON).
  - Each document is a record, and a `Collection` is a group of related documents.
  - Designed for distributed systems
  - Flexible Schema:
    - Each document in a collection can have different fields. You can insert documents with different structures in the same collection.
    - Collections are schema-less: documents within the same collection can have different fields or structures.
  - Horizontal Scaling:
    - MongoDB supports sharding, which allows you to distribute data across multiple machines (clusters).
    - Breaks large data into chunks and spreads across shards.
  - Replication (High Availability):
    - MongoDB uses replica sets to ensure fault tolerance. One node acts as primary, others are secondaries that sync and take over if the primary fails.
  - Transactions (Multi-document ACID):
    - Starting from version 4.0, MongoDB supports multi-document ACID transactions like relational DBs.
  - File Storage (GridFS):
    - Store and retrieve large files (like videos, images, PDFs) in chunks over 16MB using GridFS.
  - Security:
    - Includes authentication, authorization (RBAC), TLS/SSL encryption, auditing, IP whitelisting.
  - MongoDB Atlas:
    - Fully-managed cloud version of MongoDB. Offers scaling, backups, monitoring, and global clusters out-of-the-box.
    - No server setup needed — launch in minutes.

- JSON vs BSON

  - BSON stands for Binary JSON. It is the internal data format MongoDB uses to store documents on disk and in memory.
  - Why BSON, not plain JSON?:
    - Enables fast serialization/deserialization.
    - Faster and smaller: BSON is a binary-encoded serialization of JSON-like documents.
    - Supports more data types than JSON (like Date, Binary, ObjectId, Decimal128, etc.).
    - Efficient traversal and indexing: MongoDB can quickly scan BSON for queries.

- Difference: MongoDB vs RDBMS (SQL vs NoSQL)

✅ MongoDB Architecture (High-level Overview)
🔹 Components:
`mongod` – The core MongoDB server process (handles requests, CRUD, replication, etc.).
`mongos` – The router in a sharded cluster (routes queries to the correct shard).
`Mongo Shell` or `MongoDB Compass` – Tools to interact with MongoDB.

🔹 Basic Flow:
Client sends a query (insert, update, etc.).
mongod receives it and performs operation (read/write).
If sharded, mongos determines which shard to route to.
If replicated, operation is written to primary, and then synced to secondaries.

✅ Replica Set Diagram:

                +------------+
                |   Client   |
                +------------+
                      |
               +-------------+
               |   Primary   | <--- write/read
               +-------------+
               /             \
       +-------------+   +-------------+
       | Secondary 1 |   | Secondary 2 |  <--- read replicas / failover
       +-------------+   +-------------+

- MongoDB architecture overview (Documents, Collections, Databases)
- Installation and setup (local + cloud using Atlas)

### 🔹 MongoDB Data Model

- BSON vs JSON
- Documents and Collections
- Data types in MongoDB
- Schema design basics
- Naming conventions and indexing best practices
- how data is stored and queried internally?
- Embedding (denormalization) - Store related data within a single document.
- Referencing (normalization) - Store related data in separate documents.

| Term           | Description                                              |
| -------------- | -------------------------------------------------------- |
| **Schema**     | The structure/shape of your documents.                   |
| **Document**   | A record in MongoDB (like a row in SQL, stored as BSON). |
| **Collection** | A group of related documents (like a table in SQL).      |

### 🔹 CRUD Operations

- `db.collection.insertOne()` / `insertMany()`
- `find()` with filters and projections
- `updateOne()`, `updateMany()`, `$set`, `$inc`
- `deleteOne()`, `deleteMany()`
- Query Operators: `$gt`, `$lt`, `$gte`, `$lte`, `$eq`, `$ne`, `$in`, `$nin`, `$or`, `$and`, `$regex`, `$exists`, `$not`, `$nor`, `$expr`, `$rename`, `$unset`, `$push`, `$pull`

mongodb: `https://www.youtube.com/watch?v=ofme2o29ngU`
mongoose: `https://www.youtube.com/watch?v=DZBGEVgL2eE&t=50s`

---

## ✅ **Intermediate Level (Developer Focused)**

### 🔹 Advanced Querying

- Array queries (`$elemMatch`, `$size`)
- Nested document querying
- Aggregation Pipeline
  - `$match`, `$group`, `$project`, `$sort`, `$limit`, `$unwind`, `$lookup`
- Pagination (`limit()`, `skip()` or `range-based pagination`)
- Projections and excluding fields

### 🔹 Indexing

- What are indexes?
- Single field, compound, multikey indexes
- Text indexes and full-text search
- TTL indexes (for expiry)
- Index performance with `explain()`

### 🔹 Data Modeling Techniques

- Embedding vs Referencing (Denormalization vs Normalization)
- One-to-One, One-to-Many, Many-to-Many
- Schema versioning/migration tips
- Handling large documents (>16MB) using GridFS

### 🔹 MongoDB with Programming Languages

- Node.js + Mongoose ODM
- Python + PyMongo
- Transactions and sessions (ACID compliance since MongoDB 4.0)

---

## ✅ **Advanced Level (Architecture, Performance, Security)**

### 🔹 Performance Optimization

- Query performance analysis using `.explain()`
- Indexing strategy
- Caching strategies
- Working set and memory management

### 🔹 MongoDB Aggregation Deep Dive

- Custom aggregation pipelines
- `$facet`, `$bucket`, `$merge`, `$out`
- Performance of aggregations at scale

### 🔹 Transactions

- Multi-document transactions
- Transaction best practices
- Retryable writes

### 🔹 Replication & High Availability

- Replica sets (primary, secondary, arbiter)
- Failover and elections
- Read/Write concerns
- Delayed and hidden members

### 🔹 Sharding (Horizontal Scaling)

- What is sharding?
- Shard keys
- Config servers
- Mongos router
- Balancer and data distribution

### 🔹 Security

- Authentication (SCRAM, x.509)
- Role-based access control (RBAC)
- Network security (IP whitelisting, TLS)
- Encryption at rest and in transit
- Auditing

---

## ✅ **Enterprise & Cloud Usage**

### 🔹 MongoDB Atlas (Cloud)

- Creating clusters
- Backups and restores
- Metrics and monitoring
- Global clusters
- Triggers and Realm functions

### 🔹 DevOps and Monitoring

- MongoDB Compass
- Ops Manager / Atlas Monitoring
- Metrics to watch: memory, connections, slow queries

### 🔹 Backup and Restore

- `mongodump`, `mongorestore`
- Point-in-time recovery
- Backup strategies for production

---

## ✅ **Interview Preparation Topics**

- MongoDB architecture and working
- Compare MongoDB with SQL and other NoSQL DBs
- Data modeling design questions
- Aggregation-based coding tasks
- Query optimization
- Sharding vs replication
- Handling large scale data
- MongoDB anti-patterns
- Security and indexing trade-offs

---
