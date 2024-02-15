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
  // if the head is null or if the linked list only has a head, return it
  if (!head || !head.next) return head;
  // initialize a variable prev to null
  let prev = null;
  // initialize a variable current to the head
  let current = head;
  // initialize a variable next
  let next;
  // while the current exists
  while (current) {
    // assign next to the next node in the list (current.next)
    next = current.next;
    // move current.next to point to previous node
    current.next = prev;
    // reassign previous to current node 
    prev = current;
    // traverse to next node in linked list (current to next)
    current = next;
  }

  // set head to previous
  head = prev;
  // return the new head
  return head;
}

/* // TESTS:
console.log(reverseList([1,2,3,4,5])); // -> [5,4,3,2,1]
console.log(reverseList([1,2])); // -> [2,1]
console.log(reverseList([])); // -> [] */
