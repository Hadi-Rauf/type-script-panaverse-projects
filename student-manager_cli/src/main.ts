#! /usr/bin/env node

import  Student from './Student.js';
import inquirer from 'inquirer';
import fs from 'fs';

const DB_FILE = 'students.json';

const availableCourses = ['Blockchain', 'AI', 'IOT', 'Cloud Native Computing'];

async function loadStudentsData() {
  try {
    const data = await fs.promises.readFile(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function saveStudentsData(data: any[]) {
  try {
    await fs.promises.writeFile(DB_FILE, JSON.stringify(data), 'utf8');
  } catch (err) {}
}

async function signUp() {
  const { studentName } = await inquirer.prompt({
    type: 'input',
    name: 'studentName',
    message: 'Enter your name to sign up:',
  });

  const studentID = await generateUniqueStudentID();

  const newStudent = new Student(studentName, studentID);
  students[studentID] = newStudent;

  console.log(`Welcome, ${studentName}! Your Student ID is: ${studentID}`);
}

async function logIn() {
  const { studentID } = await inquirer.prompt({
    type: 'input',
    name: 'studentID',
    message: 'Enter your Student ID to log in:',
  });

  if (!students[studentID]) {
    console.log('Invalid Student ID. Please sign up first.');
    return;
  }

  const currentStudent = students[studentID];

  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Enroll', 'View Balance', 'Pay Tuition', 'Show Status', 'Log Out'],
    });

    if (action === 'Log Out') {
      break;
    }

    switch (action) {
      case 'Enroll':
        const { course } = await inquirer.prompt({
          type: 'list',
          name: 'course',
          message: 'Choose a course:',
          choices: availableCourses,
        });
        currentStudent.enroll(course);
        break;

      case 'View Balance':
        currentStudent.viewBalance();
        break;

      case 'Pay Tuition':
        const { amount } = await inquirer.prompt({
          type: 'number',
          name: 'amount',
          message: 'Enter payment amount:',
        });
        currentStudent.payTuition(amount);
        break;

      case 'Show Status':
        currentStudent.showStatus();
        break;

      default:
        console.log('Invalid action.');
    }
  }
}

async function generateUniqueStudentID() {
  let studentID;
  do {
    studentID = Math.floor(Math.random() * 90000) + 10000 + '';
  } while (students[studentID]); // Check if it already exists
  return studentID;
}

const students: Record<string, Student> = {};

(async () => {
  const studentData = await loadStudentsData();

  for (const student of studentData) {
    const newStudent = new Student(student.name, student.studentID);
    newStudent.coursesEnrolled = student.coursesEnrolled;
    newStudent.balance = student.balance;
    students[student.studentID] = newStudent;
  }

  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Sign Up', 'Log In', 'Exit'],
    });

    if (action === 'Exit') {
      break;
    }

    switch (action) {
      case 'Sign Up':
        await signUp();
        break;

      case 'Log In':
        await logIn();
        break;

      default:
        console.log('Invalid action.');
    }
  }

  await saveStudentsData(Object.values(students).map(student => student.getStudentData()));
})();