// The Singleton Design Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. This pattern is useful when exactly one instance of a class is needed to coordinate actions across the system.

// Key Characteristics
// Single Instance: Ensures that only one instance of the class is created.
// Global Access: Provides a global point of access to the instance.
// Controlled Access: Manages the creation and access to the instance, which can be useful for managing shared resources.

// Logger

class Logger {
  private static instance: Logger;

  private constructor() {} // prenvent direct instantiation

  public static getInstance(): Logger {
    if (!Logger.instance) {
      console.log("Creating logger instance.");
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Logger 1");
logger2.log("Logger 2");

console.log(logger1 === logger2);
