/**
 * Inheritance allows one class to inherit the properties and
 * methods of another class, thus providing code reusability and
 * modularity.
 */

/** Inheritance example 1  */

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  lunch(): void {
    console.log(`${this.name} is having lunch`);
  }
}

class Dog extends Animal {
  constructor(name: string = "Dog") {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name: string = "Cat") {
    super(name);
  }
}

const dog = new Dog("Sharky");
const cat = new Cat("Sweety");

// Both dog and cat inherit the name property and the lunch method from the animal class.
dog.lunch();
cat.lunch();

/** Inheritance example 2 */
class Product {
  protected id: string;
  protected price: number;
  protected description: string;

  constructor(id: string, price: number, description: string) {
    this.id = id;
    this.price = price;
    this.description = description;
  }

  display(): void {
    console.log(
      `Id: ${this.id} Price: ${this.price} About: ${this.description}`
    );
  }
}

class Book extends Product {
  #author: string;
  #title: string;

  constructor(
    id: string,
    price: number,
    description: string,
    author: string,
    title: string
  ) {
    super(id, price, description);
    this.#author = author;
    this.#title = title;
  }

  display(): void {
    super.display();
    console.log(`Title: ${this.title}, Author: ${this.#author}`);
  }

  get author(): string {
    return this.#author;
  }

  get title(): string {
    return this.#title;
  }
}

class Mobile extends Product {
  #brand: string;
  #model: string;

  constructor(
    id: string,
    price: number,
    description: string,
    brand: string,
    model: string
  ) {
    super(id, price, description);
    this.#brand = brand;
    this.#model = model;
  }

  get brand(): string {
    return this.#brand;
  }

  get model(): string {
    return this.#model;
  }
}

const book = new Book(
  "101",
  200,
  "A book on TypeScript design patterns",
  "Rahul Rao",
  "TypeScript design patterns"
);

const mobile = new Mobile("201", 2000, "The MI-Phone XS", "Mango", "XS-2023");

book.display();
mobile.display();
