/* 
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

/* STRATEGY:
- use a queue to maintain nodes at each level 
- iterate through each level, adding node's values to a list, then enqueue left and right children to process next
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const levelOrder = root => {
  // if the root is null, return an empty array 

  // declare a const result assigned to an empty array and a queue assigned to passing in root

  // while the queue length is greater than 0

    // assign a const levelSize to the length of the queue (num of nodes at current level)

    // assign a const currentLevel to an empty array (to store vals at current level)

    // traverse all nodes at current level with for loop (loop over levelSize) 

      // declare a const currentNode assigned to shifting (dequeue) the first node

      // push the currentNode val into the currentLevel array 

      // if left child exists, enqueue it to the queue 

      // if right child exists, enqueue it to the queue 

    // push the currentLevel's values to the result array 

  // return the result outside the loops 
  
};

/* // TESTS:
const root = new TreeNode(3, 
  new TreeNode(9)
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(root1)); // output: [[3], [9,20], [15,7]]

const root2 = new TreeNode(1); 
console.log(levelOrder(root2)); // output: [[1]]

console.log(levelOrder(null)); // output: []
*/