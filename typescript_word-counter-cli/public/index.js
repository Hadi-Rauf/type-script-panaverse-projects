import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: 'Enter a sentence to count the number of words: ',
    },
]);
const words = answers.sentence.trim().split(' ');
console.log('The number of words are ', words.length);
