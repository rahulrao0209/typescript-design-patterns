/**
 * The Open closed principle states that software entities (classes, functions, modules) should
 * be open for extension but closed for modification.
 */

/**
 * Implement a discount feature which adheres to the open-closed principle.
 *
 * Discounts
 * Regular - 10% discount | 1:1 - 1 point for every dollar spent.
 * Premium - 20% discount | 1:2 - 2 points for every dollar spent.
 * Gold - 30% discount | 1:3 - 3 points for every dollar spent.
 *
 * The below implementation adheres to the open-closed principle by creating
 * separate classes for each type of customer all of which implement a Customer
 * interface which ensures consistency. Using separate classes for each type of customer
 * keeps the code open to extension but closed for modification.
 *
 * Another way to implement this that would have violated the open-closed principle
 * would be to use conditional or switch statements for calculating the discounts and loyalty points
 * thereby keeping all the calculation logic inside a single method in a single class.
 */

interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

class LoyaltyPoints {
  calculateLoyaltyPoints(customer: Customer, amountSpent: number): number {
    return customer.addLoyaltyPoints(amountSpent);
  }
}

const regularCustomer = new RegularCustomer();
const premiumCustomer = new PremiumCustomer();
const goldCustomer = new GoldCustomer();
const discount = new Discount();
const loyaltyPoints = new LoyaltyPoints();

console.log(
  `Regular customer discount: ${discount.giveDiscount(regularCustomer)}%`
);
console.log(
  `Premium customer discount: ${discount.giveDiscount(premiumCustomer)}%`
);
console.log(`Gold customer discount: ${discount.giveDiscount(goldCustomer)}%`);

console.log(
  `${loyaltyPoints.calculateLoyaltyPoints(
    regularCustomer,
    20
  )} loyalty points for regular customer with a purchase value ${20} dollars`
);
console.log(
  `${loyaltyPoints.calculateLoyaltyPoints(
    premiumCustomer,
    20
  )} loyalty points for premium customer with a purchase value ${20} dollars`
);
console.log(
  `${loyaltyPoints.calculateLoyaltyPoints(
    goldCustomer,
    20
  )} loyalty points for gold customer with a purchase value ${20} dollars`
);
