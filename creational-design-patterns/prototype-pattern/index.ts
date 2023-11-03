/**
 * Prototype pattern
 * The Prototype pattern is a creational design pattern that allows cloning objects,
 * even complex ones without coupling to their specific classes. All prototype classes
 * have a common interface that makes it possible to copy objects even if their concrete
 * classes are unknown. Prototype objects can produce full copies since objects of the same
 * class can access each other's private fields.
 */

/**
 * When to use prototype pattern?
 * Prototype pattern can be utilized when creating an object is more
 * expensive than copying it. Some scenarios where prototypes can be
 * employed in are
 * 1. Complex object creation.
 * 2. High cost of object creation.
 * 3. Need to create many similiar but not necessarily identical objects.
 */

/**
 * Example: Implement a simple shape-drawing class using the prototype pattern.
 */

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  properties: ShapeProperties;

  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(properties: ShapeProperties, width: number, height: number) {
    super(properties);
    this.width = width;
    this.height = height;
  }

  clone(): Shape {
    const clonedProperties = { ...this.properties };
    const clonedObject = new Rectangle(
      clonedProperties,
      this.width,
      this.height
    );
    return clonedObject;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
    this.radius = radius;
  }

  clone(): Shape {
    const clonedProperties = { ...this.properties };
    const clonedObject = new Circle(clonedProperties, this.radius);
    return clonedObject;
  }
}

const rect1 = new Rectangle({ color: "blue", x: 3, y: 10 }, 25, 40);
const rect2 = rect1.clone();
rect2.properties.color = "green";

console.log("Rect1: ", rect1);
console.log("Rect2: ", rect2);
console.log("Rect1 === Rect2", rect1 === rect2);

const circle1 = new Circle({ color: "yellow", x: 3, y: 10 }, 30);
const circle2 = circle1.clone();
circle1.radius = 40;
circle2.properties.color = "orange";

console.log("Circle1: ", circle1);
console.log("Circle2: ", circle2);
console.log("Circle1 === Circle2: ", circle1 === circle2);

/**
 * Advantages of the prototype pattern
 * 1. Avoid reference errors in JavaScript/TypeScript
 * 2. Clone objects effeciently
 * 3. Efficient object manipulation
 * 4. Simplifying object creation.
 */

/**
 * Caveats of the prototype pattern
 * Complex nested objects are difficult to copy and clone.
 * Depending on the complexity of the object to be cloned,
 * care must be taken to handle all the edge cases for cloning.
 *
 * Cloning is especially difficult if the object has properties
 * which are not JSON compatible such as functions.
 *
 * If the object is JSON compatible, a simple way to clone (deep copy) objects
 * is to use -
 * const clonedObj = JSON.parse(JSON.stringify(originalObj))
 */

/**
 * A few use cases for prototype pattern
 * - Graphics editors
 *   Clone identical copies of complex objects.
 *
 * - Game development
 *   Spawn multiple units of similar objects.
 *
 * - Distributed systems and databases
 *   Spawn similar units or entities effectively.
 */
