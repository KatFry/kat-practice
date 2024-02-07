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

  // iterate through each token in the array

    // if the token is an operand...
    
      // convert to an integer
      
      // push it to the stack

    // if the token is an operator...
    
      // pop the required number of operands from the stack

      // perform the operation

      // push the result back onto the stack

  // return the result 

}


/* // TESTS:
console.log(evalRPN(["2","1","+","3","*"])); // -> 9
console.log(evalRPN(["4","13","5","/","+"])); // -> 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // -> 22
*/