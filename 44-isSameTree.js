/* 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const isSameTree = (p, q) => {
  // if both trees are null, then they are identical (return true)
  if (!p && !q) return true;
  // if one tree is null and the other is not, they are not identical (return false)
  if (!p || !q) return false;
  // if the values of the current nodes are not equal, they are not identical (return false)
  if (p.val !== q.val) return false;
  // recursively check if left and right subtrees are identical (call isSameTree, passing in left and right)
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/* // TESTS:
const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1)); // Output: true

const p2 = new TreeNode(1, new TreeNode(2), null);
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // Output: false

const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3)); // Output: false
*/