/**
 * Polymorphism allows objects of different classes to be treated
 * as objects of a common superclass.
 */

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  #radius: number;

  constructor(radius: number) {
    this.#radius = radius;
  }

  area(): number {
    return +(Math.PI * this.#radius ** 2).toFixed();
  }

  perimeter(): number {
    return +(2 * Math.PI * this.#radius).toFixed(2);
  }
}

class Square implements Shape {
  #side: number;

  constructor(side: number) {
    this.#side = side;
  }

  area(): number {
    return this.#side ** 2;
  }

  perimeter(): number {
    return this.#side * 4;
  }
}

const calculateArea = (shape: Shape) => {
  return shape.area();
};

const calculatePerimeter = (shape: Shape) => {
  return shape.perimeter();
};

const square = new Square(5);
const circle = new Circle(5);

/**
 * Using the concept of polymorphism, we can pass the instances of type
 * Square and Circle to methods which are expecting an argument which is
 * an instance of type Shape. This is because polymorphism lets us treat
 * instances of different classes (Circle and Square in this case) as
 * instances of a common superclass (Shape in this case).
 *
 * This is done when the superclass (an interface or an abstract class) is
 * implemented by another class.
 */
console.log("Area of square: ", calculateArea(square));
console.log("Area of circle: ", calculateArea(circle));

console.log("Perimeter of square: ", calculatePerimeter(square));
console.log("Perimeter of circle: ", calculatePerimeter(circle));
