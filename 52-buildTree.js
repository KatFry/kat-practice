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
- first element in the 'preorder' array is the root of the tree
- position of this root in the 'inorder' array determines the division into left and right subtrees
- function constructs left and right subtrees, then links them to the root
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const buildTree = (preorder, inorder) => {
  // if there are no nodes to construct (preorder or inorder are empty), then return null

  // declare a const rootValue assigned to preorder at index 0 (first element is the root)

  // declare a const root assigned to a new TreeNode, passing in the rootValue

  // declare a const rootIndexInInorder assigned to indexOf root in the inorder array

  // declare a const leftInorder assigned to slicing inorder at 0 and rootIndexInInorder (left subtree inorder)

  // declare a const rightInorder assigned to slicing inorder at rootIndexInInorder plus 1 (right subtree inorder)

  // declare a const leftPreorder assigned to slicing preorder at 1 and 1 plus leftInorder length (left subtree preorder)

  // declare a const rightPreorder assigned to slicing preorder at 1 plus leftInorder length (right subtree preorder)

  // assign root.left to invoking buildTree, passing in leftPreorder and leftInorder

  // assign root.right to invoking buildTree, passing in rightPreorder and rightInorder

  // return the root node

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