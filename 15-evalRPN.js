/* 
You are given an array of strings tokens that represents 
an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/

// input: array of strings
// output: number

const evalRPN = tokens => {
  // initialize an empty stack
  const stack = [];
  // iterate through each token in the array
  for (const token of tokens) {
    // if the token is an operand, convert it to an integer and push it to the stack
    if (isOperand(token)) stack.push(parseInt(token));
    // else if the token is an operator...
    else {
      // pop the last operand from the stack and assign it to operand1
      const operand1 = stack.pop();
      // pop the now-last operand from the stack and assign it to operand2
      const operand2 = stack.pop();
      // assign a constant result to invoking the performOperation func, passing in token, op1, and op2
      const result = performOperation(token, operand1, operand2);
      // push the result back onto the stack
      stack.push(result);
    }
  }
  // return the result (the last popped value)
  return stack.pop();
}

// create a helper func isOperand to check if the array item is an operand


// 


/* // TESTS:
console.log(evalRPN(["2","1","+","3","*"])); // -> 9
console.log(evalRPN(["4","13","5","/","+"])); // -> 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // -> 22
*/
