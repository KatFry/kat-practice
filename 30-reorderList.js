/* 
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

// make ListNode constructor function, passing in val and next 
class ListNode {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reorderList = head => {
  // first implement a helper function reverseList to reverse a linked list, passing in node

    // assign prev to null

    // assign current to node
    
    // assign next to null 

    // while current exists...
    
      // assign next to current.next

      // assign current.next to prev

      // assign prev to current

      // assign current to next 

    // return prev 

};


/* // TESTS:
console.log(reorderList([1,2,3,4])); // -> [1,4,2,3]
console.log(reorderList([1,2,3,4,5])); // -> [1,5,2,4,3]
*/