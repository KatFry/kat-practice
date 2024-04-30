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

/* TIME AND SPACE COMPLEXITY:
- time: O(n^2) - n is number of nodes, 'indexOf' takes O(n) time, 'slice' takes O(n) time 
- space: O(n) - due to recursive call stack and additional arrays created with 'slice' 
(could use indices instead of array slicing to make it O(h), where h is height of tree)
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
  if (!preorder.length || !inorder.length) return null;
  // declare a const rootValue assigned to preorder at index 0 (first element is the root)
  const rootValue = preorder[0];
  // declare a const root assigned to a new TreeNode, passing in the rootValue
  const root = new TreeNode(rootValue);
  // declare a const rootIndexInInorder assigned to indexOf root in the inorder array
  const rootIndexInInorder = inorder.indexOf(rootValue);
  // declare a const leftInorder assigned to slicing inorder at 0 and rootIndexInInorder (left subtree inorder)
  const leftInorder = inorder.slice(0, rootIndexInInorder);
  // declare a const rightInorder assigned to slicing inorder at rootIndexInInorder plus 1 (right subtree inorder)
  const rightInorder = inorder.slice(rootIndexInInorder + 1);
  // declare a const leftPreorder assigned to slicing preorder at 1 and 1 plus leftInorder length (left subtree preorder)
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  // declare a const rightPreorder assigned to slicing preorder at 1 plus leftInorder length (right subtree preorder)
  const rightPreorder = preorder.slice(1 + leftInorder.length);
  // assign root.left to invoking buildTree, passing in leftPreorder and leftInorder
  root.left = buildTree(leftPreorder, leftInorder);
  // assign root.right to invoking buildTree, passing in rightPreorder and rightInorder
  root.right = buildTree(rightPreorder, rightInorder);
  // return the root node
  return root;
};

// helper function to visualize the tree in level order 
const levelOrder = root => {
  // if the root is undefined, return an empty array 
  if (!root) return [];
  // declare a const queue assigned to passing in the root 
  const queue = [root];
  // declare a const result initialized to an empty array 
  const result = [];
  // while there are elements in the queue...
  while (queue.length) {
    // declare a const level initialized to an empty array
    const level = [];
    // declare a const levelSize assigned to the queue length 
    const levelSize = queue.length;
    // loop over levelSize 
    for (let i = 0; i < levelSize; i++) {
      // declare a const node assigned to shifting the first element from the queue 
      const node = queue.shift();
      // if the node exists...
      if (node) {
        // push the node val to the level 
        level.push(node.val);
        // push the node.left and node.right values to the queue 
        queue.push(node.left, node.right);
      } else {
        // push null to the level 
        level.push(null);
      }
    }
    // push the level to the result 
    result.push(level);
  }
  // return the result
  return result;
};

/* // TESTS:
const preorder1 = [3,9,20,15,7];
const inorder1 = [9,3,15,20,7];
const tree1 = buildTree(preorder1, inorder1);
console.log(levelOrder(tree1)); // output: [[3],[9,20],[null,null,15,7]]

const preorder2 = [-1];
const inorder2 = [-1];
const tree2 = buildTree(preorder2, inorder2);
console.log(levelOrder(tree2)); // output: [[-1]]
 */