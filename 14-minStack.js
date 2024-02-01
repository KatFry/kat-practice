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

// initialize 2 stacks, a dataStack and a minStack (to calculate minimum later) 
const MinStack = () => {
  this.dataStack = [];
  this.minStack = [];
}

// takes value and pushes it to end of stack 
MinStack.prototype.push = val => {
  this.dataStack.push(val);
  // if minStack length is 0 OR the passed-in val is less than or equal to calling getMin, 
  if (this.minStack.length === 0 || val <= this.getMin()) {
    // then push the value into the minStack
    this.minStack.push(val);
  }
};

// remove last element from the stack, and return removed (popped) element
MinStack.prototype.pop = () => {
  // assign const popped to popping the last element in the dataStack
  const popped = this.dataStack.pop();
  // if popped equals calling getMin, then pop the last element of the minStack
  if (popped === this.getMin()) this.minStack.pop(); 
};


MinStack.prototype.top = () => {

};

MinStack.prototype.getMin = () => {

};