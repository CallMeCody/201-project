'use strict';


var name1 = prompt('Hi! I\'m Cody. What\'s your name?');
var score = 0;

// console.log(`The user's name is ${name1}`);
alert('Hello ' + name1 + ' nice to meet you!');

// Question 1

var answer1 = prompt('1. Am I 25 years old? Yes or no?').toLowerCase();
var normalizedResponse1 = answer1.toLowerCase();

while (normalizedResponse1 !== 'yes' && normalizedResponse1 !== 'no' && normalizedResponse1 !== 'y' && normalizedResponse1 !== 'n') {
  answer1 = prompt('Please answer yes or no.');
}
if (normalizedResponse1 === 'yes' || normalizedResponse1 === 'y') {
  // console.log('Correct!');
  alert('Correct!');
  score++;
}
else if (normalizedResponse1 === 'no' || normalizedResponse1 === 'n') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

// Question 2

var answer2 = prompt('1. Am I married?').toLowerCase();
var normalizedResponse2 = answer2.toLowerCase();

while (normalizedResponse2 !== 'yes' && normalizedResponse2 !== 'no' && normalizedResponse2 !== 'y' && normalizedResponse2 !== 'n') {
  answer1 = prompt('Please answer yes or no.');
}
if (normalizedResponse2 === 'yes' || normalizedResponse2 === 'y') {
  // console.log('Correct!');
  alert('Correct!');
  score++;
}
else if (normalizedResponse2 === 'no' || normalizedResponse2 === 'n') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

// Question 3

var answer3 = prompt('1. Do I have one Kid? Yes or no?').toLowerCase();
var normalizedResponse3 = answer3.toLowerCase();

while (normalizedResponse3 !== 'yes' && normalizedResponse3 !== 'no' && normalizedResponse3 !== 'y' && normalizedResponse3 !== 'n') {
  answer1 = prompt('Please answer yes or no.');
}
if (normalizedResponse3 === 'no' || normalizedResponse3 === 'n') {
  // console.log('Correct!');
  alert('Correct!');
  score++;
}
else if (normalizedResponse3 === 'yes' || normalizedResponse3 === 'y') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

// Question 4

var answer4 = prompt('1. Did I grow up in Crescent City, CA?').toLowerCase();
var normalizedResponse4 = answer4.toLowerCase();

while (normalizedResponse4 !== 'yes' && normalizedResponse4 !== 'no' && normalizedResponse4 !== 'y' && normalizedResponse4 !== 'n') {
  answer1 = prompt('Please answer yes or no.');
}
if (normalizedResponse4 === 'yes' || normalizedResponse4 === 'y') {
  // console.log('Correct!');
  alert('Correct!');
  score++;
}
else if (normalizedResponse4 === 'no' || normalizedResponse4 === 'n') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

// Question 5

var answer5 = prompt('1. Was I in the army for 10 years?').toLowerCase();
var normalizedResponse5 = answer5.toLowerCase();

while (normalizedResponse5 !== 'yes' && normalizedResponse5 !== 'no' && normalizedResponse5 !== 'y' && normalizedResponse5 !== 'n') {
  answer1 = prompt('Please answer yes or no.');
}
if (normalizedResponse5 === 'no' || normalizedResponse5 === 'n') {
  // console.log('Correct!');
  alert('Correct!');
  score++;
}
else if (normalizedResponse5 === 'yes' || normalizedResponse5 === 'y') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

// Question 6

var answer6 = prompt('Guess a number between 1 and 10!');
var number = 5;

for (var i = 1; i < 4; i++) {
  if (answer6 < number) {
    answer6 = prompt('Too low! Try again.');
  }
  else if (answer6 > number) {
    answer6 = prompt('Too high! Try again.');
  }
  else if (answer6 === number) {
    console.log('Guessed right.');
    alert('Good Job!');
    score++;
  }
}
alert('The answer is 5!');

// Question 7

var answer7 = prompt('What is one of my favorite video game series?');
var normalizedResponse7 = answer7.toLowerCase();

var games = ['halo', 'destiny', 'divinity', 'escape from tarkov', 'dayz', 'fallout', 'terraria', 'ark', 'elder scrolls', 'league of legends'];
for (var j = 1; j < 6; j++) {
  if (normalizedResponse7 === games[j]) {
    // console.log('Correct!');
    alert('Correct!');
    score++;
    break;
  }
  else if (normalizedResponse7 !== games[j]) {
    // console.log('Incorrect!');
    prompt('That\'s not it! Try again!');
  }
}
alert(`Thanks for playing ${name1} your score is ${score}`);
