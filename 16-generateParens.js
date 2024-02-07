/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

/* time and space complexity:
- time: exponential time complexity (O(2^2n)) - but actual num of func calls pruned due to backtracking!
(so time complexity actually efficient for small values of n)
- space: linear (O(n)) 
*/

// input: number
// output: array of strings - possible valid parens generated 
const generateParens = n => {
  // use a recursive back-tracking approach
  // initialize an array to store generated combinations
  const result = [];
  // define a recursive func that takes in combination, openCount, and closeCount used so far
  const generate = (combination, openCount, closeCount) => {
    // base case: if length of current combo is 2 * n (if combo is complete)
    if (combination.length === 2 * n) {
      // add it to the array of combinations 
      result.push(combination)
      // return the function 
      return;
    }

    // recursive calls:
    // if openCount is less than n: (need to keep going and make more pairs)
    if (openCount < n) {
      // invoke the generate func, passing in the combination plus opening parens, openCount+1, closeCount
      generate(combination + '(', openCount + 1, closeCount);
    }
    // if closeCount is less than openCount: (need to close the opening parens)
    if (closeCount < openCount) {
      // invoke the generate func, passing in combination plus closing parens, openCount, closeCount+1
      generate(combination + ')', openCount, closeCount + 1);
    }
  }
  // start recursive function with empty combination - '', 0 (openCount), 0 (closeCount)
  generate('', 0, 0); 
  // return the result
  return result;
}

/* // TESTS:
console.log(generateParens(3)); // -> ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParens(1)); // -> ["()"] */
