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

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const levelOrder = root => {

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