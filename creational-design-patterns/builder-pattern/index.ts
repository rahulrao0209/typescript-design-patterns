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

/*******************************************************************************************************/

/**
 * Example-2
 * Customer onboarding system
 */
interface CustomerI {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

class Customer implements CustomerI {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
interface CustomerBuilderI {
  setFirstName(firstName: string): CustomerBuilderI;
  setLastName(lastName: string): CustomerBuilderI;
  setEmail(email: string): CustomerBuilderI;
  setPhoneNumber(phoneNumber: string): CustomerBuilderI;
  build(): CustomerI;
}

class CustomerBuilder implements CustomerBuilderI {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";

  constructor() {
    this.build();
  }

  setFirstName(firstName: string): CustomerBuilderI {
    this.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): CustomerBuilderI {
    this.lastName = lastName;
    return this;
  }
  setEmail(email: string): CustomerBuilderI {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): CustomerBuilderI {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build(): Customer {
    const customer = new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    );
    return customer;
  }
}

class CustomerDirector {
  #builder: CustomerBuilderI;

  constructor(builder: CustomerBuilderI) {
    this.#builder = builder;
  }

  buildMinimalCustomer(firstName: string, lastName: string, email: string) {
    return this.#builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }

  buildDetailedCustomer(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    return this.#builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .setPhoneNumber(phoneNumber)
      .build();
  }
}

const customerBuilder: CustomerBuilder = new CustomerBuilder();
const customerDirector: CustomerDirector = new CustomerDirector(
  customerBuilder
);

const minimalCustomer = customerDirector.buildMinimalCustomer(
  "Rahul",
  "Rao",
  "rahul@example.com"
);

const detailedCustomer = customerDirector.buildDetailedCustomer(
  "Rahul",
  "Rao",
  "rahul@example.com",
  "+91-56546565"
);

console.log("Minimal customer: ", minimalCustomer);
console.log("Detailed customer: ", detailedCustomer);

/**
 * When to use the builder pattern?
 * Some of the scenarios in which builder pattern can
 * be used are
 * 1. When complex object creation is required.
 * 2. When the object creation needs to be done in steps.
 * 3. When the object can be configured in many different ways.
 *    It would be impractical to provide constructors for every
 *    different combination.
 * 4. For code clarity (for example if the constructor has many
 *    parameters and its not clear what each parameter is for.)
 */
