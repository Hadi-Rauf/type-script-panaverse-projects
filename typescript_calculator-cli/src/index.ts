#! /usr/bin/env node
import inquirer from 'inquirer';

interface ansType {
	firstNumber: number;
	secondNumber: number;
	operator: string;
}

const answer: ansType = await inquirer.prompt([
	{
		type: 'number',
		name: 'firstNumber',
		message: 'Please enter your first number: ',
	},
	{
		type: 'number',
		name: 'secondNumber',
		message: 'Please enter your second number: ',
	},
	{
		type: 'list',
		name: 'operator',
		choices: ['+', '-', '*', '/'],
		message: 'Select operation: ',
	},
]);

switch (answer.operator) {
	case '+':
		console.log('-------------------');
		console.log(
			`${answer.firstNumber} + ${answer.secondNumber} = ${
				answer.firstNumber + answer.secondNumber
			}`
		);
		console.log('-------------------');
		break;
	case '-':
		console.log('-------------------');
		console.log(
			`${answer.firstNumber} - ${answer.secondNumber} = ${
				answer.firstNumber - answer.secondNumber
			}`
		);
		console.log('-------------------');
		break;
	case '*':
		console.log('-------------------');
		console.log(
			`${answer.firstNumber} * ${answer.secondNumber} = ${
				answer.firstNumber * answer.secondNumber
			}`
		);
		console.log('-------------------');
		break;
	case '/':
		console.log('-------------------');
		console.log(
			`${answer.firstNumber} / ${answer.secondNumber} = ${
				answer.firstNumber / answer.secondNumber
			}`
		);
		console.log('-------------------');
		break;
	default:
		console.log('-------------------');
		console.log('An error occurred while solving this equation!');
		console.log('-------------------');
		break;
}
