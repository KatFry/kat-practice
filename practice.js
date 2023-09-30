// this is my first comment to practice pushing changes to github
// c88
// c89
// c90
// c91
// c92
// c93
// c94
// c95

//addTwo function
function addTwo(num) {
  return num + 2;
}

//addS function
function addS(str) {
  return str + 's';
}

// input: array
// output: new array of each string with 's' added to end 
function addSToStrings(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 's');
  }
  return newArray;
}

// add more functions here 
const multiplyByTwo = num => num * 2;

// function is Even
// input number, output boolean
const isEven = num => num % 2 === 0; 

// function isOdd
// input number, output boolean
const isOdd = num => num % 2 !== 0; 

// function lastLetter
const lastLetter = str => str[str.length - 1];

// function disemvowel
const disemvowel = str => {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  const result = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (!vowels[letter]) result += str[i];
  }
  return result;
}