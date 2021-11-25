#!/usr/bin/env node

import * as utilities from '../src/index.js';

utilities.greet();

const makeChoice = (array) => array[utilities.getRandomNumber(0, array.length)];

utilities.askQuestion(`${utilities.getRandomNumber(0, 100)} ${makeChoice(['+', '-', '*'])} ${utilities.getRandomNumber(0, 100)}`);
