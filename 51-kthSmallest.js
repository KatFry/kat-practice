/* 
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all 
the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
*/

/* STRATEGY:
- use an in-order traversal to traverse the bst in ascending order
- maintain a count of nodes encountered during traversal and stop when count reaches 'k'
- if 'count' is equal to 'k', the corresponding node's value is stored in 'result'
- in-order traversal is recursively applied to left subtree, current node, and right subtree
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const kthSmallest = root => {
  
};

/* // TESTS:
const root1 = new TreeNode(3,
  new TreeNode(1, new TreeNode(2)),
  new TreeNode(4),
);
console.log(kthSmallest(root1, 1)); // output: 1

const root2 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6),
);
console.log(kthSmallest(root2, 3)); 
*/