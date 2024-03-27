/* 
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

/* TIME AND SPACE COMPLEXITY:
- time: O(n) - n is number of nodes in binary tree (visit each once to calculate depth)
- space: O(n) - recursive function calls on call stack go as deep as height of binary tree
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const maxDepth = root => {
  // if the root is undefined, return 0
  if (!root) return 0;
  // declare const leftDepth assigned to eval result of invoking maxDepth, passing in root.left
  const leftDepth = maxDepth(root.left);
  // declare const rightDepth assigned to eval result of invoking maxDepth, passing in root.right
  const rightDepth = maxDepth(root.right);
  // return the result of Math.max, passing in leftDepth and rightDepth plus 1 
  return Math.max(leftDepth, rightDepth) + 1;
};


/* // TESTS:
// Test case 1
const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);
console.log(maxDepth(tree1)); // Output: 3

// Test case 2
const tree2 = new TreeNode(1);
tree2.right = new TreeNode(2);
console.log(maxDepth(tree2)); // Output: 2
 */