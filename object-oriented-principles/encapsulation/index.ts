/**
 * Encapsulation promotes separation of concerns and data-hiding, making it easier
 * to reason about, maintain and reuse code.
 *
 * In encapsulation, an object internal state is protected from direct manipulation or access
 * from external code and instead a well-defined API is provided for interacting with the internal state
 * usually in the form of getters and setters.
 *
 * Encapsulation provides data-hiding thereby preventing unauthorized access or misuse of data
 * and provides control over data-validation and preserves the integrity of data.
 */

/**
 * Example:
 * ---------------
 * Here the balance property of the Bank class is encapsulated as a private property.
 * It cannot be manipulated directly externally and can be updated only via the
 * deposit and withdraw methods.
 */

class Bank {
  #balance: number;

  constructor(initialAmount: number = 0) {
    if (initialAmount < 0)
      this.#throwError("Amount must be a positive numeric value");
    this.#balance = initialAmount;
  }

  /**
   * Deposit funds in the bank.
   * @param {Amount} amount
   */
  deposit(amount: number): void {
    if (amount < 0)
      return this.#throwError("Amount must be a positive numeric value");
    this.#balance += amount;
  }

  /**
   * Withdraw funds from the bank. Throw an error in case of insufficient funds.
   * @param {Amount} amount
   */
  withdraw(amount: number): void {
    if (this.#balance - amount < 0)
      return this.#throwError("Insufficient funds");
    this.#balance -= amount;
  }

  get balance(): number {
    return this.#balance;
  }

  /**
   * Throw an error with the provided error message.
   * @param {string} msg
   */
  #throwError(msg: string) {
    throw Error(msg ? msg : "Invalid inputs provided!");
  }
}

const bank = new Bank(1000);

// Deposit money
bank.deposit(200);

// Check balance
console.log("Deposited funds. Total balance: ", bank.balance);

// Withdraw money
bank.withdraw(20);

// Check balance
console.log("Withdrawn funds. Total balance: ", bank.balance);
