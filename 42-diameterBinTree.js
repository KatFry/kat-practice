/* 
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const diameterBinTree = root => {
  // initialize a variable diameter to 0 to be updated as you go
  let diameter = 0;
  // declare a const dfs (depth first search) assigned to a function that takes a node 
  const dfs = node => {
    // if the node does not exist, return 0 (length is 0)
    if (!node) return 0;
    // declare a const leftDepth assigned to invoking dfs, passing in node.left
    const leftDepth = dfs(node.left);
    // declare a const rightDepth assigned to invoking dfs, passing in node.right
    const rightDepth = dfs(node.right);
    // reassign diameter to Math.max of current diameter and leftDepth plus rightDepth
    diameter = Math.max(diameter, leftDepth + rightDepth);
    // return Math.max of leftDepth and rightDepth plus 1
    return Math.max(leftDepth, rightDepth) + 1;
  }
  // invoke dfs, passing in root 
  dfs(root);
  // return the diameter
  return diameter;
};

/* // TESTS:
// Example usage:
const root1 = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);
console.log(diameterOfBinaryTree(root1)); // Output: 3

const root2 = new TreeNode(1, new TreeNode(2));
console.log(diameterOfBinaryTree(root2)); // Output: 1
*/