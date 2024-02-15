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
  // if the array length is 0, return the head (input array)

  // initialize a variable prev to null

  // initialize a variable current to head 

  // while current is not null

    // assign nextNode to current.next

    // assign current.next to prev

    // assign prev to current

    // assign current to nextNode

  // return prev 
  
}

/* // TESTS:
console.log(reverseList([1,2,3,4,5])); // -> [5,4,3,2,1]
console.log(reverseList([1,2])); // -> [2,1]
console.log(reverseList([])); // -> []
*/