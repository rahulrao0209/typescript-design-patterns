/**
 * Liskov substitution principle
 * If S is a subtype of T, then objects of type T in a program may
 * be replaced with objects of type S without altering any of the
 * desirable properties of that program.
 *
 * In simple words the LSP states that we should be able to use sub-class
 * instances wherever the instances of parent-class may be expected.
 */

/**
 * Example
 * Create a Payment Processor that allows payments
 * using credit-cards, debit-cards and paypal.
 * The code should adhere to the Liskov subsitution principle
 * and the other solid design principles as well.
 *
 *
 * Solution
 * The below implementation adheres to the LSP because we can substitute
 * any of the child classes of the abstract PaymentProcessor parent class
 * without changing the behavior of the program.
 * Also note how the cash payment is being done by using a CashPayment class
 * that extends a CashProcessor class. The cashProcessor class in turn implements
 * the processPayment method of the PaymentProcessor abstract class, thereby stating
 * that the payment will be done in cash instead of being done digitally.
 * This adheres to the LSP by not erroring out on the CashPayment and thus a payment
 * in cash can also be done by means of the CashProcessor class which satisfies the
 * PaymentProcessor contract.
 */

abstract class PaymentProcessor {
  abstract processPayment(amount: number): string;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): string {
    return `Processing credit card payment for amount of Rs.${amount}`;
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): string {
    return `Processing debit card payment for amount of Rs.${amount}`;
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): string {
    return `Processing PayPal payment for amount of Rs.${amount}`;
  }
}

class CashProcessor extends PaymentProcessor {
  processPayment(amount: number): string {
    return `Amount of Rs.${amount} to be paid by cash.`;
  }
}

class CashPayment extends CashProcessor {}

const makePayment = function (
  paymentProcessor: PaymentProcessor,
  amount: number
): string {
  return paymentProcessor.processPayment(amount);
};

/** Initialize different payment processors */
const debitCard = new DebitCardProcessor();
const creditCard = new CreditCardProcessor();
const paypal = new PayPalProcessor();
const cash = new CashPayment();

/** Make payments */
console.log(makePayment(debitCard, 3000));
console.log(makePayment(creditCard, 1000));
console.log(makePayment(paypal, 7000));
console.log(makePayment(cash, 10000));
