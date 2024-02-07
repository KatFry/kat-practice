/* 
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait
after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

/* time and space complexity:
- time: O(n) - n is the length of the input array (push and pop take constant time)
- space: O(n) - n is the length of the input array worst case, answer array also O(n) space 
*/

// input: array of nums (temperatures)
// output: array of nums (days to wait before getting a warmer temperature)
const dailyTemperatures = (temps) => {
  // initialize a const n to the length of temps array 
  const n = temps.length;
  // initialize an array 'answer' of same length as input array 'temps'
  const answer = new Array(n).fill(0);
  // initialize an empty stack
  const stack = [];
  // iterate through elements in the temps array 
  for (let i = 0; i < n; i++) {
    // while stack is not empty and current temp is greater than temp at index at top of stack 
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      // pop index from stack - assign to const prevIndex
      const prevIndex = stack.pop(); 
      // set answer[index] to difference between current index (i) and previndex 
      answer[prevIndex] = i - prevIndex;
    }
    // push current index to the stack 
    stack.push(i);
  }
  // while stack length is greater than 0, 
  while (stack.length > 0) {
    // remaining indices have no warmer day - answer[stack.pop()] equals 0 
    answer[stack.pop()] = 0;
  }
  // return answer 
  return answer;
}


/* // TESTS:
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // -> [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // -> [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // -> [1,1,0] */
