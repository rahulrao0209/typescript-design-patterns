/**
 * Dependency inversion principle.
 * High-level modules should not depend on low-level modules. Both
 * should depend on abstractions. Abstractions should not depend on details.
 * Details should depend on abstractions.
 *
 * Example:
 * The below code example shows the Dependency inversion principle in action.
 * The HighLevelModule class which is a high-level-module can be any class or feature in general
 * (like the user or posts features) does not directly depend on the low-level-modules which are the
 * MySqlDatabase and MongoDbDatabase classes. Instead it uses a Database interface which serves as
 * an abstraction between the high-level and the low-level modules.
 * This abstraction of using an interface instead of using the low-level database modules directly
 * keeps our high-level module more flexible as it does not depend on which type of database its dealing
 * with as long as that database implements the contract provided by the Database interface.
 *
 * Thus the Dependency inversion principle facilitates the decoupling of our modules by making the
 * modules depend on abstractions (via interfaces or abstract classes) instead of depending on concrete
 * class implementations.
 */

interface Database {
  save(data: string): void;
}

class MySqlDatabase implements Database {
  save(data: string): void {
    console.log(`Saving ${data} to MySQL database`);
  }
}

class MongoDbDatabase implements Database {
  save(data: string): void {
    console.log(`Saving ${data} to MongoDB database`);
  }
}

class HighLevelModule {
  #database: Database;
  constructor(database: Database) {
    this.#database = database;
  }

  executeSave(data: string) {
    this.#database.save(data);
  }
}

const mySql = new MySqlDatabase();
const mongoDb = new MongoDbDatabase();

const user = new HighLevelModule(mySql);
const posts = new HighLevelModule(mongoDb);

user.executeSave("Rahul");
posts.executeSave("Latest post");
