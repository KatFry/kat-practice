/* 
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the 
LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const lowestComAncestor = (root, p, q) => {
  // assign a variable currentNode to the root 

  // while the currentNode exists...

    // if both p and q have values smaller than the current node, LCA must be in left, so move left

    // else if both p and q have values larger than the current node, LCA must be in right, so move right 

    // else one p or q has smaller value and other has larger value, you've found the LCA (return currentNode)

  // return null outside the loop 

};

/* // TESTS:
const root = new TreeNode(6,
  new TreeNode(2,
    new TreeNode(0),
    new TreeNode(4, new TreeNode(3), new TreeNode(5))
  ),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

const p1 = new TreeNode(2);
const q1 = new TreeNode(8);

const lca1 = lowestCommonAncestor(root, p1, q1);
console.log(lca1.val); // Output: 6
*/