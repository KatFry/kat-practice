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

// input: obj, callback
// output: boolean 
const goodKeys = (obj, cb) => {
  const result = [];
  for (const key of obj) {
    if (cb(obj[key])) result.push(key);
  }
  return result;
}

/*
Write a function arrayBuilder that takes in a count object 
and returns an array filled with the appropriate numbers of elements. 
The order of the elements in the array does not matter, 
but repeated elements should be grouped.
*/
const arrayBuilder = obj => {
  const elements = [];
  for (const key in obj) {
    let repeatCount = obj[key];
    while (repeatCount > 0) {
      elements.push(key);
      repeatCount--;
    }
  }
  return elements;
}

// more functions here 

// function noDuplicates
const noDuplicates = arr => {
  const result = [];
  const set = new Set(arr);
  for (const key of set) {
    result.push(set[key]);
  }
  return result;
}

// function consecutive
const consecutive = arr => {
  const sorted = arr.sort((a, b) => a - b);
  let length = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (arr[i + 1] === arr[i] + 1) length++;
  }
  return length;
}

// function reverseLinkedList
function Node(value) {
  this.value = value;
  this.next = null;
}

const reverseLinkedList = (head) => {
  // create the pointers 
  let curr = head;
  let prev = null;
  let next = null;
  // while curr is not null
  while (curr !== null) {
    // reassign next to curr.next
    next = curr.next;
    // reassign curr.next to prev (to point in other direction)
    curr.next = prev;
    // reassign prev to curr
    prev = curr;
    // reassign curr to next
    curr = next;
  }
}

// function sumArray
const sumArray = arr => {
  return arr.reduce((acc, curr) => acc + curr); 
}

// more functions below 

// function makePerson
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// add methods to the Person prototype
Person.prototype.introduce = () => {
  return `hello, my name is ${this.name}`;
}

Person.prototype.greet = () => {
  return `hello, I am ${this.name} and I am ${this.age} years old`;
}

// developer class extends person 
class Developer extends Person {
  constructor (city, pet) {
    this.city = city;
    this.pet = pet;
  }
}
// comments
// add more functions here 