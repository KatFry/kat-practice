/* 
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root 
with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. 
The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const isSubTree = (root, subRoot) => {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
};

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) {
    console.log("p:", p ? p.val : null, "q:", q ? q.val : null);
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


/* // TESTS:
const root1 = new TreeNode(3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5)
);
const subRoot1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubTree(root1, subRoot1)); // Output: true

const root2 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5, null, new TreeNode(0))
);
const subRoot2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubTree(root2, subRoot2)); // Output: false
 */