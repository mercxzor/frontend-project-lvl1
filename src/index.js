#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const congratUser = (user) => {
  console.log(`Congratulations, ${user}`);
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const maxQuestion = 3;
