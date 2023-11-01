/**
 * Singleton pattern
 * The singleton pattern is a creational design pattern that lets you ensure
 * that a class has only one instance, while providing a global access point to
 * that instance.
 */

/** Basic example implementation for singleton pattern  */
class Singleton {
  static #instance: Singleton;
  static #value: string;

  private constructor() {}

  static get instance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  get value(): string {
    return Singleton.#value;
  }

  set value(val: string) {
    Singleton.#value = val;
  }
}

const object_1 = Singleton.instance;
const object_2 = Singleton.instance;

object_1.value = "Hello!";

console.log("object-1 value: ", object_1.value);
console.log("object-2 value: ", object_2.value);
console.log("object-1 === object2-: ", object_1 === object_2);

/** Singleton example 2
 *  Create a Logger class with a log method that is shared accross
 *  the application. The log method is responsible for saving all
 *  application logs to a single file on the system.
 */

class Logger {
  static #instance: Logger;

  private constructor() {}

  static get instance(): Logger {
    if (!Logger.#instance) Logger.#instance = new Logger();
    return Logger.#instance;
  }

  log(path: string, message: string): void {
    console.log(`Write log [${message}] to file at path: ${path}`);
  }
}

const logger = Logger.instance;
logger.log("files/myFile", "data log message");

/**
 * When to use singleton pattern?
 *
 * 1. When using global variables.
 *    When using a global variable that needs to be accessible by
 *    several parts of the system, but should have the same value.
 *    Global variables can also be used for variables that may have
 *    multiple access point but only a single control.
 *
 * 2. Repeated initialization.
 *    If the code has repeated expensive initialization of the same
 *    object then using singleton may be a good option.
 *    Example would be a database connection object. A database connection
 *    object can be created just once as a single instance and shared throughout
 *    the application. The Singleton class can also expose other methods related
 *    to the database connection which could be used to manipulate the single
 *    database connection object.
 *
 *    Another example would be to use singleton where we need to disallow duplicate
 *    values. Or in cases where our application might be creating unnecessary duplicate
 *    instances where they are not required.
 *
 * 3. Pass data to deeply nested objects.
 *    Singleton can also be used when we want to pass an instance to deeply nested child classes
 *    where the data within the objects needs to be persistent.
 */

/**
 * Caveats of singleton pattern
 * 1. Global state
 * Using singleton leads to shared global state leading to high
 * coupling between our classes.
 *
 * 2. Difficult to test
 * Preserving state between tests, increases testing complexity.
 *
 * 3. Subclassing cannot be done.
 * Singleton classes do not allow inheritance due to the presence of
 * private constructor and static methods and the semantics of inheritance.
 * Due to this there is a chance of Singleton classes getting too large as
 * they may need to maintain a lot of the functionality themselves.
 *
 * 4. Memory consumption.
 * As noted in the above point, Singleton's run the risk of getting too large
 * as subclassing cannot be done. Also, Singleton objects need to stay in memory
 * throughout the duration of the application lifecycle as many other parts depend
 * on the single instance. This can potentially lead to overconsumption of memory.
 */

/**
 * Singleton pattern use-cases
 * In general singleton pattern should apply when a single instance
 * of a class must be used.
 * - Loggers
 * - Loading configuration data
 * - Caching
 * - Service proxies
 * - Accessing shared resources like database connections.
 */
