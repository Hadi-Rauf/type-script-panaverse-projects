#! /usr/bin/env node
export default class Student {
    public name: string;
    private studentID: string;
    public coursesEnrolled: string[];
    public balance: number;
  
    constructor(name: string, studentID: string) {
      this.name = name;
      this.studentID = studentID;
      this.coursesEnrolled = [];
      this.balance = 0;
    }
  
    enroll(course: string) {
      this.coursesEnrolled.push(course);
    }
  
    viewBalance() {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    payTuition(amount: number) {
      this.balance -= amount;
      console.log(`Payment of $${amount} received from ${this.name}`);
    }
  
    showStatus() {
      console.log(`Student Name: ${this.name}`);
      console.log(`Student ID: ${this.studentID}`);
      console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  
    getStudentData(): Record<string, string[] | string | number> {
      return {
        name: this.name,
        studentID: this.studentID,
        coursesEnrolled: this.coursesEnrolled,
        balance: this.balance,
      };
    }
  }