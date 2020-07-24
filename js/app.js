'use strict';

var nameinput;

askName();
askQuestion1();
askQuestion2();
askQuestion3();
askQuestion4();
askQuestion5();


function askName() {
  nameinput = prompt('What is your name?');
  // console.log('Hello! ' + nameinput + '. My name is Cody. I\'m going to ask five questions to see what you know about me.');
  alert('Hello! ' + nameinput + '. My name is Cody. I\'m going to ask five questions to see what you know about me.');
}

// Question 1


function askQuestion1() {
  var answer1 = prompt('Am I 25 years old?', 'Type yes or no.').toLowerCase();

  while (answer1 !== 'yes' && answer1 !== 'no' && answer1 !== 'y' && answer1 !== 'n') {
    answer1 = prompt('Please answer yes or no.');
  }
  if (answer1 === 'yes' || answer1 === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  }
}

// Question 2

function askQuestion2() {
  var answer2 = prompt('Am I married?', 'Type yes or no.').toLowerCase();
  while (answer2 !== 'yes' && answer2 !== 'no' && answer2 !== 'y' && answer2 !== 'n') {
    answer2 = prompt('Please answer yes or no.');
  }
  if (answer2 === 'yes' || answer2 === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  }
  else if (answer2 === 'no' || answer2 === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  }
}

// Question 3


function askQuestion3() {
  var answer3 = prompt('Do I have one kid?', 'Type yes or no.');
  while (answer3 !== 'yes' && answer3 !== 'no' && answer3 !== 'y' && answer3 !== 'n') {
    answer3 = prompt('Please answer yes or no.');
  }
  if (answer3 === 'yes' || answer3 === 'y') {
    // console.log('Incorrect!');
    alert('Incorrect');
  }
  else if (answer3 === 'no' || answer3 === 'n') {
    // console.log('Correct!');
    alert('Correct!');
  }
}

// Question 4


function askQuestion4() {
  var answer4 = prompt('Did I grow up in Crescent City, CA?');
  while (answer4 !== 'yes' && answer4 !== 'no' && answer4 !== 'y' && answer4 !== 'n') {
    answer4 = prompt('Please answer yes or no.');
  }
  if (answer4 === 'yes' || answer4 === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  }
  else if (answer4 === 'no' || answer4 === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  }
}

// Question 5

function askQuestion5() {
  var answer5 = prompt('Was I in the army for 10 years?');
  while (answer5 !== 'yes' && answer5 !== 'no' && answer5 !== 'y' && answer5 !== 'n') {
    answer5 = prompt('Please answer yes or no.');
  }
  if (answer5 === 'yes' || answer5 === 'y') {
    // console.log('Incorrect! Thanks for playing ' + nameinput + '.');
    alert('Incorrect! Thanks for playing ' + nameinput + '.');
  }
  else if (answer5 === 'no' || answer5 === 'n') {
    // console.log('Correct! Thanks for playing ' + nameinput + '.');
    alert('Correct! Thanks for playing ' + nameinput + '.');
  }
}
