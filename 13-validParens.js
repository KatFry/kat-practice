/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/* time and space complexity: both O(n) */

// input: string
// output: boolean (if parens are valid or not)
const validParens = s => {
  // declare a const initialized to an empty stack
  const stack = []; 
  // iterate through the characters in the input string
  for (let i = 0; i < s.length; i++) {
    // declare const char assigned to s at i to provide readability 
    const char = s[i];
    // if the character is an opening bracket: (, {, or [, push it to the stack
    if (char === '(' || char === '{' || char === '[') stack.push(char); 
    else {
      // if the stack is empty, return false
      if (!stack.length) return false;
      // assign a constant popped to popping the element off the stack
      const popped = stack.pop(); 
      // check if the characters match the closing brackets 
      // if the char is ')' and popped is not equal to '(' OR
      if (
        (char === ')' && popped !== '(') ||
        // if the char is '}' and popped is not equal to '{' OR
        (char === '}' && popped !== '{') || 
        // if the char is ']' and popped is not equal to '[', return false 
        (char === ']' && popped !== '[') 
      ) {
        return false;
      }
    }
  }
  // if the stack is empty, return true (there are no remaining open brackets in the stack) 
  return stack.length === 0;
}


/* // TESTS: 
console.log(validParens('()')); // -> true
console.log(validParens('()[]{}')); // -> true
console.log(validParens('(]')); // -> false 
console.log(validParens(')(')); 
 */

