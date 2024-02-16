/* 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/* time and space complexity:
- time: O(m + n) - m and n are lengths of input linked lists 
- space: O(1) - function uses constant amount of extra space, regardless of input sizes
*/

// input: 2 sorted linked lists (arrays)
// output: merged list as an array 

// make a listNode class, passing in val and next to the constructor 
class ListNode {
  constructor (val, next = null) {
    this.val = val; 
    this.next = next;
  }
};

const mergeTwoLists = (list1, list2) => {
  // declare a const dummy assigned to a new instance of the ListNode 
  const dummy = new ListNode();
  // assign a variable current to dummy (point to current node in merged list)
  let current = dummy;
  // simplify code by assigning variable p1 to list1, p2 to list2
  let p1 = list1;
  let p2 = list2;
  // while p1 and p2 exist
  while (p1 && p2) {
    // if the p1 value is less than the p2 value, 
    if (p1.val < p2.val) {
      // append smaller node to merged list by assigning current.next to p1
      current.next = p1;
      // move pointer in list1 by assigning p1 to p1.next
      p1 = p1.next;
    }
    // else 
    else {
      // assign current.next to p2 (append smaller node to merged list)
      current.next = p2;
      // move pointer in list2 by assigning p2 to p2.next 
      p2 = p2. next;
    }
    // assign current to current.next to move to the next node in the merged list
    current = current.next;
  }
  // if one list becomes empty (like only p1 is left), assign current.next to p1
  if (p1) current.next = p1;
  // else if only p2 is left, assign current.next to p2 
  else current.next = p2; 
  // return dummy.next to return head of merged list
  return dummy.next;
}

// Helper function to convert linked list to array
const linkedListToArray = (head) => {
  let result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};



/* // TESTS:
const test1List1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const test1List2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const test1 = mergeTwoLists(test1List1, test1List2);
console.log(linkedListToArray(test1)); // -> [1, 1, 2, 3, 4, 4]

const test2List1 = new ListNode();
const test2List2 = new ListNode();
const test2 = mergeTwoLists(test2List1, test2List2);
console.log(linkedListToArray(test2)); // -> []

const test3List1 = new ListNode();
const test3List2 = new ListNode(0);
const test3 = mergeTwoLists(test3List1, test3List2);
console.log(linkedListToArray(test3)); // -> [0] */