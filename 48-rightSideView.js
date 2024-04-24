/* 
Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

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

const rightSideView = root => {

};


/* // TESTS:
const root1 = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4)),
);
console.log(rightSideView(root1)); // output: [1, 3, 4]

const root2 = new TreeNode(1, null, new TreeNode(3));
console.log(rightSideView(root2)); // output: [1, 3]

const root3 = null;
console.log(rightSideView(root3)); // output: []
*/