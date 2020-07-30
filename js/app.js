/* eslint-disable no-trailing-spaces */
'use strict';

var userName = prompt('What is your name?').toLowerCase();
askUserName();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
numberGuessGame();
questionSeven();

var score = 0;

function askUserName() {
  //makes sure they enter something
  while (userName === null || userName === '') {
    userName = prompt('Please enter your name');
  }
  //console.log(`the user's name is ${userName}`);
  alert('Hello ' + userName + ', I\'m going to ask you 5 questions about myself.  Please answer in the form of (yes/no) or (y/n)');
}


function questionOne() {
  var answerOne = prompt('Am I 25 years old?').toLowerCase();
  var checker = false;
  while (checker === false) {
    if (answerOne === 'yes' || answerOne === 'y') {
      alert('Correct!');
      // console.log(`user entered ${answer} which is incorrect`);
      checker = true;
    }
    else if (answerOne === 'no' || answerOne === 'n') {
      alert('Incorrect!');
      // console.log(`user entered ${answer} which is correct`);
      score++;
      checker = true;
    }
    else {
      answerOne = prompt('Please answer with yes or no').toLowerCase();
    }
  }
}

function questionTwo() {
  var answerTwo = prompt('Did I grow up in Crescent City, CA?').toLowerCase();
  var checker = false;
  while (checker === false) {
    if (answerTwo === 'yes' || answerTwo === 'y') {
      alert('Correct!');
      // console.log(`user entered ${answer} which is incorrect`);
      checker = true;
    }
    else if (answerTwo === 'no' || answerTwo === 'n') {
      alert('Incorrect!');
      // console.log(`user entered ${answer} which is correct`);
      score++;
      checker = true;
    }
    else {
      answerTwo = prompt('Please answer with yes or no').toLowerCase();
    }
  }
}

function questionThree() {
  var answerThree = prompt('Am I married?').toLowerCase();
  var checker = false;
  while (checker === false) {
    if (answerThree === 'yes' || answerThree === 'y') {
      alert('Correct!');
      // console.log(`user entered ${answer} which is incorrect`);
      checker = true;
    }
    else if (answerThree === 'no' || answerThree === 'n') {
      alert('Incorrect!');
      // console.log(`user entered ${answer} which is correct`);
      score++;
      checker = true;
    }
    else {
      answerThree = prompt('Please answer with yes or no').toLowerCase();
    }
  }
}

function questionFour() {
  var answerFour = prompt('Do I have one kid?').toLowerCase();
  var checker = false;
  while (checker === false) {
    if (answerFour === 'yes' || answerFour === 'y') {
      alert('Incorrect!');
      // console.log(`user entered ${answer} which is incorrect`);
      checker = true;
    }
    else if (answerFour === 'no' || answerFour === 'n') {
      alert('Correct!');
      // console.log(`user entered ${answer} which is correct`);
      score++;
      checker = true;
    }
    else {
      answerFour = prompt('Please answer with yes or no').toLowerCase();
    }
  }
}

function questionFive() {
  var answerFive = prompt('Was I in the army for ten years?').toLowerCase();
  var checker = false;
  while (checker === false) {
    if (answerFive === 'yes' || answerFive === 'y') {
      alert('Incorrect!');
      // console.log(`user entered ${answer} which is incorrect`);
      checker = true;
    }
    else if (answerFive === 'no' || answerFive === 'n') {
      alert('Correct!');
      // console.log(`user entered ${answer} which is correct`);
      score++;
      checker = true;
    }
    else {
      answerFive = prompt('Please answer with yes or no').toLowerCase();
    }
  }
}

//NUMBER GAME
function numberGuessGame() {

  var trys = 4;
  var dive = prompt('How deep have I ever dove underwater, it\'s a number between 150\' and 170\'?');
  var feet = 164;
  var Q6CorrAns = false;

  //START PROMPTING
  while (trys > 0) {
    var guesses = Number(prompt(`${dive} You have ${trys} guesses left.`));
    trys--;

    if (guesses === feet) {
      alert(`${feet} is right! I dove down to 164' in Lake Washington, it's not only cold but very dark!`);
      score++;
      trys = 0;
      Q6CorrAns = true;
    }
    else {
      //  alert('That\'s wrong, try again!');

      // HIGH OR LOW PROMPTS
      if (guesses > feet) {
        prompt('That\'s too deep, try again!');
      }
      if (guesses < feet) {
        prompt('The depth is greater than your guess, try again!');
      }
    }
  }
  //END GAME
  if (Q6CorrAns === false) {
    alert(`Sorry, ${feet} is the correct depth. It's not only cold but very dark!`);
  }
}

function questionSeven() {

  var favBand = prompt('Guess one of my top four favorite bands!');
  var bands = ['led zeppelin', 'greta van fleet', 'system of a down', 'rage against the machine'];
  var attemptsQ7 = 6;
  var AnsCorr7 = false;

  while (attemptsQ7 > 0 && !AnsCorr7) {
    attemptsQ7--;
    for (var i = 0; i < bands.length; i++) {
      if (favBand === bands[i]) {
        alert(`Great job, ${userName}! That's one of my favorite bands!`);
        score++;
        AnsCorr7 = true;
      }
    }
    if (attemptsQ7 > 0 && !AnsCorr7) {
      favBand = prompt(`That is incorrect ${userName}, try again!`).toLowerCase();
    }
  }
  if (attemptsQ7 === 0 && !AnsCorr7) {
    alert(`Thanks for playing ${userName}, you're out of guesses`);
  }
}
// Question 6

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

