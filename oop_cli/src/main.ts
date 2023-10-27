#!/usr/bin/env node

import inquirer from 'inquirer';
import Person from './classes/Person.js';
import Student from './classes/Student.js';

const input = await inquirer.prompt([
  {
    message: 'What would you like to do?',
    name: 'personAnswer',
    type: 'list',
    choices: ['Talk to others', 'Rather keep to yourself', 'Something else!'],
  },
  {
    message: 'What is your name?',
    name: 'studentName',
    type: 'string',
  },
]);
const MyPerson: Person = new Person();
const MyStudent: Student = new Student();

MyPerson.AskQuestion(input.personAnswer);
console.log(`You are: ${MyPerson.GetPersonality}`);

MyStudent.setName = input.studentName
console.log(`Your name is: ${MyStudent.getName} and your personality type is: ${MyStudent.GetPersonality}`);