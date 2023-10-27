import BankAccount from './BankAccount';

class Customer {
	public _firstName = 'Unknown';
	public _lastName = 'Unknown';
	public _gender: 'Male' | 'Female' | 'Unknown' = 'Unknown';
	public _age: number | 'Unknown' = 'Unknown';
	public _mobileNumber = 'Unknown';
	public _bankAccount = new BankAccount();

	get firstName() {
		return this._firstName;
	}
	set firstName(value: string) {
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(value: string) {
		this._lastName = value;
	}

	get gender() {
		return this._gender;
	}
	set gender(value: 'Male' | 'Female' | 'Unknown') {
		this._gender = value;
	}

	get age() {
		return this._age;
	}
	set age(value: number | 'Unknown') {
		this._age = value;
	}

	get mobileNumber() {
		return this._mobileNumber;
	}
	set mobileNumber(value: string) {
		this._mobileNumber = value;
	}

	get bankAccount() {
		return this._bankAccount;
	}
	set bankAccount(value: BankAccount) {
		this._bankAccount = value;
	}

	public getCustomerInfo(): string {
		return `
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Mobile: ${this.mobileNumber}
            Account Balance: ${this.bankAccount.accountBalance}
        `;
	}
}

export default Customer;
