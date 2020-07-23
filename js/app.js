'use strict';

var name = prompt('what is your name?');
console.log('User\'s name is', name);
alert('Hello! Welcome, ' + name + '.');

var answer1 = prompt('Am I 25 years old?');
if (answer1 === true)
{
  console.log('Correct!');
  // alert('Correct!');
}

var answer2 = confirm('Do I have 1 kid?');
if (answer2 === false)
{
  console.log('Correct!');
  // alert('Correct!');
}

var answer3 = confirm('Am I married?');
if (answer3 === true)
{
  console.log('Correct!');
  // alert('Correct!');
}

var answer4 = confirm('Did I grow up in Crescent City, CA?');
if (answer4 === true)
{
  console.log('Correct!');
  // alert('Correct!');
}

var answer5 = confirm('Was I in the Army for 10 years?');
if (answer5 === false)
{
  console.log('Correct!');
  // alert('Correct!');
}
