/* 
Given the head of a singly linked list, reverse the list, 
and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

// input: array - linked list in forward direction
// output: reversed array - linked list in backward direction 

// first create the ListNode constructor, passing in val and next


const reverseList = head => {
  // initialize a variable prev to null
  let prev = null;
  // initialize a variable current to the head
  let current = head;
  // while the current length is greater than 0
  while (current.length > 0) {
    // assign a const val to popping the last item from current
    const val = current.pop();
    // assign a const newNode to an object, passing in val, and next assigned to prev
    const newNode = { val, next: prev }
    // assign variable prev to newNode 
    prev = newNode;
  }
  // return prev
  return prev;
}

/* // TESTS:
console.log(reverseList([1,2,3,4,5])); // -> [5,4,3,2,1]
console.log(reverseList([1,2])); // -> [2,1]
console.log(reverseList([])); // -> []
*/