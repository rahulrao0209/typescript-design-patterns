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
