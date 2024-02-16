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

// input: 2 sorted linked lists (arrays)
// output: merged list as an array 

// make a listNode class, passing in val and next to the constructor 
class ListNode {
  
}



const mergeTwoLists = (list1, list2) => {
  // declare a const dummy assigned to a new instance of the ListNode 

  // assign a variable current to dummy (point to current node in merged list)

  // assign a variable tail to dummy (point to tail of merged list) 

  // simplify code by assigning variable p1 to list1, p2 to list2

  // while p1 and p2 exist

    // if the p1 value is less than the p2 value, 

      // append smaller node to merged list by assigning current.next to p1

      // move pointer in list1 by assigning p1 to p1.next

    // else 

      // assign current.next to p2 (append smaller node to merged list)

      // move pointer in list2 by assigning p2 to p2.next 

    // assign current to current.next to move to the next node in the merged list

  // if one list becomes empty (like only p1 is left), assign current.next to p1

  // else if only p2 is left, assign current.next to p2 

  // find the tail of the merged list by looping while current.next exists

    // assign current to current.next 

  // return the head and tail of merged list (head is dummy.next, tail is current) 

}


/* // TESTS:
console.log(mergeTwoLists([1,2,4], [1,3,4])); // -> [1,1,2,3,4,4] 
console.log(mergeTwoLists([],[])); // -> [] 
console.log(mergeTwoLists([],[0])); // -> [0]
*/