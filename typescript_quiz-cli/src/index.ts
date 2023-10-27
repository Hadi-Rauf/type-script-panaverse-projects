import inquirer from 'inquirer';

interface QuestionAnswer {
  question: string;
  answer: string;
}

const questions: QuestionAnswer[] = [
  {
    question: 'What is TypeScript?',
    answer:
      'TypeScript is a superset of JavaScript that adds static type checking in it.',
  },
  {
    question: 'Why can TypeScript solve many problems for you?',
    answer:
      'TypeScript can solve many problems due to its static typing and additional language features.',
  },
  {
    question: 'What are the key benefits of using TypeScript?',
    answer:
      'TypeScript provides static typing, enhanced code quality, early error detection, improved tooling support, and better collaboration for scalable and maintainable JavaScript projects.',
  },
  {
    question: 'What is Node.js?',
    answer:
      'Node.js is a JavaScript runtime that allows developers to execute server-side code outside of a web browser, enabling scalable and efficient backend development.',
  },
  {
    question:
      'Why can it be efficient to use the same language for frontend and backend?',
    answer:
      'Using the same language for frontend and backend enables code reusability, consistency, and streamlined development, leading to improved efficiency and easier maintenance.',
  },
];

function removePunctuation(text: string): string {
  return text.replace(/[.!]/g, '').trim();
}

function normalizeAnswer(text: string): string {
  return removePunctuation(text.toLowerCase());
}

async function runQuiz() {
  let score = 0;
  for (const qna of questions) {
    const { answer } = await inquirer.prompt({
      type: 'input',
      name: 'answer',
      message: qna.question,
    });

    const userAnswer = normalizeAnswer(answer);
    const correctAnswer = normalizeAnswer(qna.answer);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`Wrong! The correct answer would be: ${qna.answer}`);
    }
  }

  console.log(`Your score: ${score} out of ${questions.length}`);

  const percentage = (score / questions.length) * 100;
  let grade: string;

  switch (true) {
    case percentage >= 90:
      grade = 'A';
      break;
    case percentage >= 80:
      grade = 'B';
      break;
    case percentage >= 70:
      grade = 'C';
      break;
    case percentage >= 60:
      grade = 'D';
      break;
    default:
      grade = 'F';
  }

  console.log(`Your grade: ${grade}`);
}

runQuiz();
