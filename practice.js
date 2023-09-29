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
