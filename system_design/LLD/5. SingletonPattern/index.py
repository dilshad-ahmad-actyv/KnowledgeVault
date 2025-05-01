# Logger

class Logger:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            print('Creating a logger instance')
            cls._instance = super(Logger, cls).__new__(cls)
        return cls._instance
        
    def log(self, message):
        print(f'Print the log message: {message}')

    
logger1 = Logger()
logger2 = Logger()

logger1.log('Logger1')
logger2.log('Logger2')

print(logger1 is logger2)