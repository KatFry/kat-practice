/* 
Given the head of a linked list, remove the nth node from the end of the list
and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

// make ListNode constructor function, passing in val and next 
class ListNode {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}


const removeNthFromEnd = (head, n) => {
  // create a dummy node for handling edge cases (like removing from head)
  const dummy = new ListNode(0); 
  // assign dummy.next to the head
  dummy.next = head;
  // initialize a variable first to dummy
  let first = dummy;
  // also initialize a variable second to dummy
  let second = dummy;
  // move the second pointer n + 1 steps ahead (looping while i <= n + 1)
  for (let i = 1; i <= n + 1; i++) {
    // assign second to second.next
    second = second.next;
  }
  // move both pointers until second pointer reaches end (while second isn't null)
  while (second !== null) {
    // assign first to first.next
    first = first.next;
    // assign second to second.next
    second = second.next;
  }
  // remove nth node from end by updating next pointer of preceding node 
  // do this by assigning first.next to first.next.next
  first.next = first.next.next;
  // return dummy.next (the modified head)
  return dummy.next;
};


/* // TESTS:
console.log(removeNthFromEnd([1,2,3,4,5], 2)); // -> [1,2,3,5]
console.log(removeNthFromEnd([1], 1)); // -> []
console.log(removeNthFromEnd([1,2], 1)); // -> [1]
*/