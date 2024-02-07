/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

// input: number
// output: array of strings - possible valid parens generated 
const generateParens = n => {
  // use a recursive back-tracking approach
  // initialize an array to store generated combinations

  // define a recursive func that takes in combination, openCount, and closeCount used so far

    // base case: if length of current combo is 2 * n
    
      // add it to the array of combinations 

      // return the function 
    
    // recursive calls:
    // if openCount is less than n:

      // invoke the generate func, passing in the combination plus opening parens, openCount+1, closeCount

    // if closeCount is less than openCount

      // invoke the generate func, passing in combination plus closing parens, openCount, closeCount+1

  // start recursive function with empty combination - '', 0 (openCount), 0 (closeCount)

  // return the result
  
}

/* // TESTS:
console.log(generateParens(3)); // -> ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParens(1)); // -> ["()"]
*/