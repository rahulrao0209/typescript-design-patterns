/**
 * Abstraction hides the implementation details
 * and exposes a simple API for other parts of the code to use.
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
 * Area and permeter are calulated using the calculateArea and calculatePerimeter functions
 * respectively which provide a layer of abstraction over the implementation details of the Square and
 * Circle and how the area's and perimeter's are calculated internally.
 */
console.log("Area of square: ", calculateArea(square));
console.log("Area of circle: ", calculateArea(circle));

console.log("Perimeter of square: ", calculatePerimeter(square));
console.log("Perimeter of circle: ", calculatePerimeter(circle));
