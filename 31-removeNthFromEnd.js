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

const removeNthFromEnd = (head, n) => {
  // create a dummy node for handling edge cases (like removing from head)

  // assign dummy.next to the head

  // initialize a variable first to dummy

  // also initialize a variable second to dummy

  // move the second pointer n + 1 steps ahead (looping while i <= n + 1)

    // assign second to second.next

  // move both pointers until second pointer reaches end (while second isn't null)
  
    // assign first to first.next

    // assign second to second.next

  // remove nth node from end by updating next pointer of preceding node 
  // do this by assigning first.next to first.next.next

  // return dummy.next (the modified head)
  
};


/* // TESTS:
console.log(removeNthFromEnd([1,2,3,4,5], 2)); // -> [1,2,3,5]
console.log(removeNthFromEnd([1], 1)); // -> []
console.log(removeNthFromEnd([1,2], 1)); // -> [1]
*/