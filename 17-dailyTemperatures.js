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

// input: array of nums (temperatures)
// output: array of nums (days to wait before getting a warmer temperature)
const dailyTemperatures = (temps) => {
  // initialize an array 'answer' of same length as input array 'temps'

  // initialize an empty stack

  // iterate through elements in the temps array 

    // while stack is not empty and current temp is greater than temp at index at top of stack 

      // pop index from stack

      // set answer[index] to difference between currIndex and popped index 

    // push current index to the stack 

  // while stack length is greater than 0, 

    // remaining indices have no warmer day - answer[stack.pop()] equals 0 

  // return answer 
  
}


/* // TESTS:
console.log(dailyTemperatures()); // -> 
console.log(dailyTemperatures()); // -> 
console.log(dailyTemperatures()); // ->  
*/