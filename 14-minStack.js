/* 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

// initialize stack to empty object, length to 0 
const MinStack = () => {
  this.stack = {};
  this.length = 0;
}

// takes value and pushes it to end of stack 
MinStack.prototype.push = val => {
  // assign last key value pair in object to the passed-in val, and increment length
  this.stack[this.length] = val;
  this.length++; 
};

// remove last element from the stack and decrement length, and return removed (popped) element
MinStack.prototype.pop = () => {
  const popped = this.stack[this.length - 1];
  delete this.stack[this.length - 1];
  this.length--;
  return popped;
};

MinStack.prototype.top = () => {

};

MinStack.prototype.getMin = () => {

};