console.log('COMBO');
// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd= (int) => {
    if(int % 2 === 0){
     return'EVEN';
      } else {
     return 'ODD';
 }
};

console.log(evenOdd(24));// returns EVEN
console.log(evenOdd(25)); // returns ODD

// Challenge #2
// given a number, find its opposite. 2 = -2

const posToNeg = (num) => {
  return 0 -num;
  };
   console.log(posToNeg(5));// returns -5
   console.log(posToNeg(-5));// returns 5

   // Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
// Write code Here
const sameWord = (str)=> {
  for( i = 0; i < sameWord.length; i++)
  if( str[i]=== sameWord.length) {
  return 'True';
    } else {
  return 'False';
  }
  };
  console.log(sameWord('eye')); 




///

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat.
// But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, 
//output small if the animal is an alligator (case insensitive) otherwise return wide.
const frogStory= (animal) => {
  console.log('An ' + animal + ' LOVES to eat the lips of wide-mouthed frogs!');
  if(animal === 'Alligator'){
    return 'small';
  } else {
    return 'wide';
  }
};
console.log(frogStory('Alligator')); // returns small
console.log(frogStory('Snake'))// returns wide

