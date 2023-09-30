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

/*
Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array 
using the callback to see if the output matches the corresponding element (by index) of the second array. 
If there is a match, the element from the first array becomes a key in an object, 
and the element from the second array becomes the corresponding value.
*/
const objOfMatches = (arr1, arr2, cb) => {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cb(arr1[i]) === arr2[i]) {
      obj[arr1[i]] = arr2[i];
    }
  }
  return obj;
}

/*
Create a function goodKeys that accepts an object and a callback. 
The callback will return either true or false. 
goodKeys will iterate through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys whose associated values 
yielded a true return value from the callback.
*/

