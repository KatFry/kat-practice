/* 
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree 
and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]
*/

/* STRATEGY: 
Use recursion to split the tree into left and right subtrees based on first element of preorder traversal
and its corresponding position in the inorder traversal. 
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const buildTree = (preorder, inorder) => {

};

/* // TESTS:
const preorder1 = [3,9,20,15,7];
const inorder1 = [9,3,15,20,7];
const tree1 = buildTree(preorder1, inorder1);
console.log(levelOrder(tree1)); // output: [3,9,20,null,null,15,7];

const preorder2 = [-1];
const inorder2 = [-1];
const tree2 = buildTree(preorder2, inorder2);
console.log(levelOrder(tree2)); // output: [[-1]]
*/