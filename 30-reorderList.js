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

/* time and space complexity:
- time: O(n) - n is number of nodes in linked list, because iterates twice 
- space: O(1) - constant amount of extra space regardless of input size
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
  const reverseList = node => {
    // assign prev to null
    let prev = null;
    // assign current to node
    let current = node;
    // assign next to null 
    let next = null;
    // while current exists...
    while (current) {
      // assign next to current.next
      next = current.next;
      // assign current.next to prev
      current.next = prev;
      // assign prev to current
      prev = current;
      // assign current to next 
      current = next; 
    }
    // return prev 
    return prev;
  };

  // next: helper function to merge two linked lists
  const mergeLists = (list1, list2) => {
    // while list2 exists...
    while (list2) {
      // assign next1 to list1.next, next2 to list2.next
      let next1 = list1.next;
      let next2 = list2.next;
      // assign list1.next to list2
      list1.next = list2;
      // assign list2.next to next1 
      list2.next = next1;
      // assign list1 to next1
      list1 = next1;
      // assign list2 to next2
      list2 = next2;
    }
  };
  
  // assign a variable slow to head (use technique of slow and fast pointers to find middle of list)
  let slow = head;
  // assign a variable fast to head 
  let fast = head;
  // while fast and fast.next exist...
  while (fast && fast.next) { 
    // assign slow to slow.next
    slow = slow.next;
    // assign fast to fast.next.next 
    fast = fast.next.next;
  }
  // reverse second half of linked list by assigning reversedSecondHalf to reverseList, passing in slow
  let reversedSecondHalf = reverseList(slow);
  // merge first half and reversed second half by passing head and reversedSecondHalf to mergeLists 
  mergeLists(head, reversedSecondHalf); 
};


/* // TESTS:
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reorderList(list1);
console.log(list1); // Output: [1, 4, 2, 3] */