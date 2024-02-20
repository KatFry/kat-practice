/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that 
can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is 
connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, 
where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, 
where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/* Explanation: 
In this problem, you are given the head of a linked list. 
The linked list nodes have two properties: val, which is the value of the node,
and next, which is a reference to the next node in the list. 
The next pointer of the last node in the list may be pointing to a node before it, 
creating a cycle.

The input also includes an index pos that represents the position (0-indexed)
where the tail's next pointer is connected to. 
If pos is -1, it means there is no cycle.

The task is to determine whether the linked list has a cycle. 
If there is a cycle, the function should return true; otherwise, 
it should return false.

Here's a high-level explanation of the solution:

We use two pointers, often referred to as the "slow" and "fast" pointers.
The slow pointer moves one step at a time, 
and the fast pointer moves two steps at a time.
If there is no cycle, the fast pointer will eventually reach the end of the linked list, 
and the function will return false.
If there is a cycle, the fast pointer will eventually catch up to the slow pointer 
inside the cycle, and the function will return true.
*/


// make ListNode constructor function, passing in val and next 
class ListNode {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const hasCycle = head => {
  // if the list is empty or has only one node, return false
  if (!head || !head.next) return false;
  // initialize a pointer slow to the head
  let slow = head;
  // initialize a pointer fast to head.next
  let fast = head.next;
  // while slow is not equal to fast
  while (slow !== fast) {
    // if there is no cycle, slow and fast pointers won't meet 
    // if fast doesn't exist or fast.next doesn't exist, return false
    if (!fast || !fast.next) return false;
    // reassign slow to slow.next
    slow = slow.next;
    // reassign fast to fast.next.next 
    fast = fast.next.next;
  }
  // if the loop breaks, there is a cycle, so return true 
  return true; 
};

/* // TESTS:
// basic case: no cycle 
const listNoCycle = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(hasCycle(listNoCycle)); // Output: false

//Cycle at the End:
const listCycleEnd = new ListNode(1, new ListNode(2, new ListNode(3)));
listCycleEnd.next.next.next = listCycleEnd;
console.log(hasCycle(listCycleEnd)); // Output: true

//Cycle in the Middle:
const listCycleMiddle = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
listCycleMiddle.next.next.next.next = listCycleMiddle.next;
console.log(hasCycle(listCycleMiddle)); // Output: true

// Single Node (No Cycle):
const singleNode = new ListNode(42);
console.log(hasCycle(singleNode)); // Output: false

// Empty List:
const emptyList = null;
console.log(hasCycle(emptyList)); // Output: false

// No Cycle (pos = -1):
const noCyclePosMinus1 = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(hasCycle(noCyclePosMinus1)); // Output: false */