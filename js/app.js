/* eslint-disable no-trailing-spaces */
'use strict';

// ask name
var userName = prompt('What is your name?');
//makes sure they enter something
while (userName === null || userName === '') 
{
  userName = prompt('Please enter your name');
}
//console.log(`the user's name is ${userName}`);
alert('Hello ' + userName + ', I\'m going to ask you 5 questions about myself.  Please answer in the form of (yes/no) or (y/n)');

var score = 0;

// question 1
var answer = prompt('Am I 25 years old?').toLowerCase();
//console.log(`initial input is ${answer}`);

var checker = false;

while (checker === false) 
{
  if (answer === 'yes' || answer === 'y') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is incorrect`);
    checker = true;
  } 
  else if (answer === 'no' || answer === 'n') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is correct`);
    score++;
    checker = true;
  } 
  else 
  {
    answer = prompt('Please answer with yes or no').toLowerCase();
  }
}

// question 2
answer = prompt('Do I grow up in Crescent City, CA?').toLowerCase();
// console.log(`initial input is ${answer}`);
checker = false;
while (checker === false) 
{
  if (answer === 'yes' || answer === 'y') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is correct`);
    score++;
    checker = true;
  } 
  else if (answer === 'no' || answer === 'n') 
  {
    alert('Incorrect!');
    // console.log(`user entered ${answer} which is incorrect`);
    checker = true;
  } 
  else 
  {
    answer = prompt('Please answer with yes or no').toLowerCase();
  }
}

// question 3
answer = prompt('Am I married?').toLowerCase();
// console.log(`initial input is ${answer}`);
checker = false;
while (checker === false) 
{
  if (answer === 'yes' || answer === 'y') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is incorrect`);
    checker = true;
  } 
  else if (answer === 'no' || answer === 'n') 
  {
    alert('Incorrect!');
    // console.log(`user entered ${answer} which is correct`);
    checker = true;
    score++;
  } 
  else 
  {
    answer = prompt('Please answer with yes or no').toLowerCase();
  }
}

// question 4
answer = prompt('Do I have one kid?').toLowerCase();
// console.log(`initial input is ${answer}`);
checker = false;
while (checker === false) 
{
  if (answer === 'yes' || answer === 'y') 
  {
    alert('Incorrect!');
    // console.log(`user entered ${answer} which is incorrect`);
    checker = true;
  } 
  else if (answer === 'no' || answer === 'n') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is correct`);
    checker = true;
    score++;
  } 
  else 
  {
    answer = prompt('Please answer with yes or no').toLowerCase();
  }
}

// question 5
answer = prompt('Was I in the army for ten years?').toLowerCase();
// console.log(`initial input is ${answer}`);
checker = false;
while (checker === false) 
{
  if (answer === 'yes' || answer === 'y') 
  {
    alert('Incorrect!');
    // console.log(`user entered ${answer} which is correct`);
    checker = true;
    score++;
  } 
  else if (answer === 'no' || answer === 'n') 
  {
    alert('Correct!');
    // console.log(`user entered ${answer} which is incorrect`);
    checker = true;
  } 
  else 
  {
    answer = prompt('Please answer with (yes/no) or (y/n)').toLowerCase();
  }
}

// //Question 6

// var lastAlert = false;
// var number = 5;

// var numberGuess = prompt('Guess a number between 1 and 10');
// //console.log(`guess ${numGuess} and random ${randomNumber}`);
// for (var i = 0; i < 3 ; i++) 
// {
//   //console.log(`for loop start, guess${numGuess} and random is ${randomNumber}`);
//   if (numberGuess > number) 
//   {
//     numberGuess = Number(prompt(`Nope, it's lower than ${numberGuess}, you have ${3-i} more chance(s)`));
//     //console.log('too high');
//   } 
//   else if (numberGuess < number) 
//   {
//     numberGuess = Number(prompt(`Nope, it's higher then ${numberGuess}, you have ${3-i} more chance(s)`));
//     //console.log('too low');
//   } 
//   else 
//   {
//     alert(`good guess!, it is ${numberGuess}!!!`);
//     //console.log('correct');
//     score++;
//     lastAlert = true;
//   }
// }
// if (lastAlert === false) 
// {
//   alert(`That was your last guess, the correct answer was ${number}`);
// }

// // Question 7
// lastAlert = false;
// checker = false;
// var games = ['Halo', 'Destiny', '', ''];
// alert('');
// for(var j = 0; j < 6; j++) 
// {
//   var guess =  prompt().toLowerCase();
//   for(var k = 0; k < games.length; k++) 
//   {
//     //console.log(catNames[k]);
//     if(guess === games[k])
//     {
//       alert();
//       checker = true;
//       //console.log('correct');
//       lastAlert = true;
//       score++;
//     }
//   }
//   if(checker)
//   {
//     break;
//   } 
//   else if (j < 5) 
//   {
//     alert(`None of them are ${guess}, try again.`);
//   }
// }
// if (lastAlert === false) 
// {
//   alert(`That was your last guess, they are ${games}`);
// }

// alert(`Thanks for playing ${userName}.  You got ${score} out of 7.`);

