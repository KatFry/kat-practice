/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

const isValidBst = root => {

};

/* // TESTS:
const root1 = new TreeNode(2,
  new TreeNode(1),
  new TreeNode(3),
);
console.log(isValidBst(root1)); // output: true

const root2 = new TreeNode(5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6)),
);
console.log(isValidBst(root2)); // output: false
*/