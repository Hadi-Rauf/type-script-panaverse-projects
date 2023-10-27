import inquirer from 'inquirer';
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: 'What do you want to add in your todo list? ',
        },
        {
            type: 'confirm',
            name: 'retry',
            message: 'Would you like to add anything else in your todo list? ',
            default: false,
        },
    ]);
    const { todo, retry } = answers;
    loop = retry;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log('Invalid input.');
    }
}
if (todos.length > 0) {
    console.log('Your Todo List:');
    todos.forEach((todo, i) => {
        console.log(`Task ${i + 1}:`, todo);
    });
}
else {
    console.log('No todos found!');
}
