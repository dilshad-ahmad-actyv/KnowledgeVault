from queue import Queue

class Connection:
    def __init__(self, id):
        self.id = id
        self.in_use = False
    
    def connect(self):
        print(f'Connection {self.id} is now active.')
    
    def disconnect(self):
        print(f'Connection {self.id} is now released.')

class ConnectionPool:
    def __init__(self, size):
        self.pool = Queue(maxsize=size)
        for i in range(size):
            self.pool.put(Connection(i + 1))
    
    def acquire(self):
        conn = self.pool.get()
        conn.in_use = True
        conn.connect()
        return conn
    
    def release(self, conn):
        conn.in_use = False
        conn.disconnect()
        conn = self.pool.put(conn)
    
pool = ConnectionPool(2)

conn1 = pool.acquire()
conn2 = pool.acquire()
pool.release(conn1)
conn3 = pool.acquire()

print(conn1)
print(conn2)
print(conn3)
