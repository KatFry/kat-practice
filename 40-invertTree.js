/* 
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

/* TIME AND SPACE COMPLEXITY:
- time: O(n) - n is the number of nodes in the binary tree (visit each node once)
- space: O(n) - worst case, call stack holds n recursive calls 
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// input: root of binary tree
// output: inverted root of binary tree
const invertTree = root => {
  // if the root is null, return null 
  if (!root) return null;
  // initialize a variable temp to the root.left
  let temp = root.left;
  // reassign root.left to the evaluated result of calling invertTree, passing in root.right
  root.left = invertTree(root.right);
  // reassign root.right to the evaluated result of calling invertTree, passing in temp
  root.right = invertTree(temp);
  // return root of inverted tree 
  return root;
};

/* // TESTS:
const root1 = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
const root2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root3 = null;

// Invert trees and print the results
console.log(invertTree(root1)); // Output: [4,7,2,9,6,3,1]
console.log(invertTree(root2)); // Output: [2,3,1]
console.log(invertTree(root3)); // Output: []
 */