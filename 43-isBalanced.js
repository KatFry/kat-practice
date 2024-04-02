/* 
Given a binary tree, determine if it is height-balanced.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// define a function getHeight that takes the root and calculates height of each node in tree 
const getHeight = root => {
  // if the root is undefined, return 0
  if (!root) return 0;
  // declare a const leftHeight assigned to the eval result of invoking getHeight, passing in root.left
  const leftHeight = getHeight(root.left);
  // declare a const rightHeight assigned to the eval result of invoking getHeight, passing in root.right
  const rightHeight = getHeight(root.right);
  // return Math.max of leftHeight and rightHeight plus 1 
  return Math.max(leftHeight, rightHeight) + 1; 
};

const isBalanced = root => {
  // declare a function checkBalance that takes the root
  const checkBalance = root => {
    // if the node is undefined, return true (must be balanced)
    if (!node) return true;
    // declare a const leftHeight assigned to eval result of invoking getHeight, passing in node.left
    const leftHeight = getHeight(node.left);
    // declare a const rightHeight assigned to eval result of invoking getHeight, passing in node.right
    const rightHeight = getHeight(node.right);
    // check: if abs value of leftHeight minus rightHeight is greater than 1, return false 
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    // return result of invoking checkBalance passing in node.left and again for node.right 
    return checkBalance(node.left) && checkBalance(node.right);
  }
  // return checkBalance, passing in the root 
  return checkBalance(root); 
};

/* // TESTS:
const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(isBalanced(root1)); // Output: true

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)));
console.log(isBalanced(root2)); // Output: false

const root3 = null;
console.log(isBalanced(root3)); // Output: true
*/