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

/* TIME AND SPACE COMPLEXITY:
- time: O(h + k) - h is the height of the tree, k is position of kth smallest element 
  - worst case: traverses through all left nodes to reach desired element
- space: O(h) - h is the height of the tree (due to recursive stack space)
  - worst case: tree is skewed, leading to stack depth equal to height of tree 
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const kthSmallest = (root, k) => {
  // initialize a count variable to 0 and a result to null 
  let count = 0;
  let result = null;
  // declare a function inOrderTraversal that takes the node as a parameter
  const inOrderTraversal = node => {
    // if node is undefined or result is not null, return (either null or result is already found)
    if (!node || result !== null) return;
    // traverse the left subtree by calling inOrderTraversal, passing in node.left
    inOrderTraversal(node.left);
    // increment count
    count++;
    // if count is k, 
    if (count === k) {
      // reassign result to node.val (store the kth smallest value)
      result = node.val;
      // return (stop any further traversal once kth element is found) 
      return;
    }
    // traverse the right subtree by calling inOrderTraversal, passing in node.right 
    inOrderTraversal(node.right);
  }
  // start in-order traversal by passing in the root initially
  inOrderTraversal(root);
  // return the result (the kth smallest element)
  return result;
};

/* // TESTS:
const root1 = new TreeNode(3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4),
);
console.log(kthSmallest(root1, 1)); // output: 1

const root2 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6),
);
console.log(kthSmallest(root2, 3)); // output: 3
 */