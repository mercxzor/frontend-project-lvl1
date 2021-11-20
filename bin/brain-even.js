#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenChecker = (currentNumber) => {
  let even = '';
  if (currentNumber % 2 === 0) {
    even = 'yes';
  } else {
    even = 'no';
  }
  return even;
};

const answerChecker = (currentAnswer, num, user) => {
  if (currentAnswer !== evenChecker(num)) {
    console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${evenChecker(num)}\nLet's try again, ${user}`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const user = greet();
for (let i = 1; i < 4; i += 1) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const num = getRandomNumber(0, 100);

  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = answerChecker(answer, num, user);
  if (isCorrectAnswer === false) { i = 0; }
  if (i === 3) {
    console.log(`Congratulations, ${user}`);
  }
}
