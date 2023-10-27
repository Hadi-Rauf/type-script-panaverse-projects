import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 100);
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'guessedNumber',
        message: 'Guess a number between 0-100: ',
    },
]);
if (answer.guessedNumber == randomNumber) {
    console.log('Your answer is correct. You Win! the number is:', randomNumber);
}
else if (answer.guessedNumber > 100) {
    console.log('Please select a number between 0-100');
}
else {
    console.log('Your answer is incorrect! the number was:', randomNumber);
}
