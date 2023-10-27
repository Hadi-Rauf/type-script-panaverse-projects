interface IBankAccount {
	credit(d: number): string;
	debit(d: number): string;
}

class BankAccount implements IBankAccount {
	public _accountBalance: number;

	constructor() {
		this._accountBalance = 100;
	}

	get accountBalance() {
		return this._accountBalance;
	}

	set accountBalance(balance: number) {
		this._accountBalance = balance;
	}

	public credit(amount: number): string {
		let statement = 'Transaction Failed!';

		if (amount > 0) {
			this._accountBalance += amount;

			if (amount > 100) {
				this._accountBalance -= 1;
			}

			statement = 'Your account has been credited successfully!';
		}

		return statement;
	}

	public debit(amount: number): string {
		let statement = 'Sorry, You have insufficient balance!';

		if (amount > 0) {
			statement = 'The amount you have entered is wrong!';

			if (this._accountBalance > amount) {
				this._accountBalance -= amount;

				statement = `Transaction successfull! Now your balance is: ${this._accountBalance}`;
			} else {
				statement = "You don't have enough money to do this transaction";
			}
		}

		return statement;
	}
}

export default BankAccount;
