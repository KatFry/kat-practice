/* 
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, 
and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero,
except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/* STRATEGY:
Initialize a dummy node to simplify the code.
Set up pointers for both linked lists (l1 and l2) and a carry variable.
Traverse both linked lists, adding the corresponding digits and the carry.
Update the carry for the next iteration.
Create a new node with the sum of digits (considering carry) 
and update the result linked list.
Move to the next nodes in l1 and l2 if they exist.
After the loop, if there's a remaining carry, add it as a new node.
Return the result linked list.
*/

// input: 2 arrays (linked lists)
// output: 1 array of each digit of added numbers 
const addTwoNumbers = (l1, l2) => {

};

/* // TESTS:
console.log(addTwoNumbers([2,4,3], [5,6,4])); // -> [7,0,8]
console.log(addTwoNumbers([0], [0])); // -> [0] 
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // -> [8,9,9,9,0,0,0,1]
*/