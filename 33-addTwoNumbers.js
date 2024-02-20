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

// make ListNode constructor function, passing in val and next 
class ListNode {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
};

// Helper function to convert the array to a linked list
const arrayToLinkedList = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
};

// Helper function to convert the linked list to an array for easier testing
const linkedListToArray = (head) => {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);  // Use push to add elements to the end of the array
    current = current.next;
  }
  return result;
};

// input: 2 arrays (linked lists)
// output: 1 array of each digit of added numbers 
const addTwoNumbers = (l1, l2) => {
  // initialize a dummy node to simplify the code (to a new ListNode)
  const dummy = new ListNode();
  // initialize a variable current to the dummy 
  let current = dummy;
  // initialize a carry variable to 0 to update as you go
  let carry = 0;
  // initialize pointers p1 and p2 to l1 and l2
  let p1 = l1;
  let p2 = l2;
  // while either p1 or p2 exist, traverse both of them 
  while (p1 || p2) {
    // declare a const x assigned to ternary: either p1 value or 0 (if p1 doesn't exist)
    const x = p1 ? p1.val : 0;
    // declare a const y assigned to ternary: either p2 value or 0 (if p2 doesn't exist)
    const y = p2 ? p2.val : 0;
    // calculate the sum with the carry (x plus y plus carry)
    const sum = x + y + carry;
    // update carry for next iteration (because if there are extra digits, carry them over)
    // reassign carry to Math.floor of the sum divided by 10 
    carry = Math.floor(sum / 10);
    // assign current.next to a new ListNode, passing in sum % 10 
    // updates next pointer of current node in result linked list to point to newly created node, 
    // effectively adding it to the result
    current.next = new ListNode(sum % 10); 
    // reassign current to current.next
    current = current.next;
    // if p1 exists, reassign p1 to p1.next (move forward to next nodes) (same with p2)
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  // if there is a remaining carry (greater than 0), add it as a new node (current.next) 
  if (carry > 0) current.next = new ListNode(carry);
  // return dummy.next - the result linked list (starting from next node of dummy node)
  return dummy.next;
};


/* // TESTS:
const test1 = linkedListToArray(addTwoNumbers(arrayToLinkedList([2, 4, 3]), arrayToLinkedList([5, 6, 4])));
console.log(test1); // -> [7, 0, 8]

const test2 = linkedListToArray(addTwoNumbers(arrayToLinkedList([0]), arrayToLinkedList([0])));
console.log(test2); // -> [0]

const test3 = linkedListToArray(addTwoNumbers(arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]), arrayToLinkedList([9, 9, 9, 9])));
console.log(test3); // -> [8, 9, 9, 9, 0, 0, 0, 1]
*/