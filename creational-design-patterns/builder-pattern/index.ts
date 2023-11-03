/**
 * Builder pattern
 * Builder pattern is a creational design pattern that can be used to
 * create complex objects step by step.
 */

/**
 * Example-1 Basic implementation
 */

interface Builder {
  setFeatureA(): void;
  setFeatureB(): void;
  setFeatureC(): void;
}

class Product {
  #features: string[] = [];

  add(feature: string): void {
    this.#features.push(feature);
  }

  list(): void {
    console.log(`Product features: ${this.#features.join("| ")}`);
  }

  get features(): string[] {
    return this.#features;
  }
}

class ConcreteBuilder implements Builder {
  #product!: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.#product = new Product();
  }

  setFeatureA(): void {
    this.#product.add("Feature-A");
  }

  setFeatureB(): void {
    this.#product.add("Feature-B");
  }

  setFeatureC(): void {
    this.#product.add("Feature-C");
  }

  get product(): Product {
    const result = this.#product;
    /** Reset before returning the final product. */
    this.reset();
    return result;
  }
}

class Director {
  #builder!: Builder;

  set builder(builder: Builder) {
    this.#builder = builder;
  }

  buildMinimumViableProduct(): void {
    this.#builder.setFeatureA();
  }

  buildFullFeaturedProduct(): void {
    this.#builder.setFeatureA();
    this.#builder.setFeatureB();
    this.#builder.setFeatureC();
  }
}

const director = new Director();
const builder = new ConcreteBuilder();
director.builder = builder;

/** Build an MVP */
director.buildMinimumViableProduct();
const mvp = builder.product;
console.log("Minimum viable product (MVP): ", mvp.features);

/** Build full-featured product */
director.buildFullFeaturedProduct();
const ffp = builder.product;
console.log("Full featured product (FFP): ", ffp.features);
