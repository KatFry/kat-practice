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

/* STRATEGY:
- use a queue for level-order traversal
- keep track of the last node (rightmost) and add it to the result array
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const rightSideView = root => {
  // if the tree is empty, return an empty array
  if (!root) return [];
  // declare a const result assigned to an empty array to store the right-side view
  const result = [];
  // declare a const queue, passing in the root for level-order traversal
  const queue = [root];
  // loop until the queue is empty (length greater than 0)
  while (queue.length > 0) {
    // declare a const levelSize assigned to length of the queue
    const levelSize = queue.length; 
    // iterate over the levelSize
    for (let i = 0; i < levelSize; i++) {
      // declare a const currentNode assigned to shifting the first item in the queue
      const currentNode = queue.shift();
      // if it's the last node in the level, add it to the result (i is levelSize minus 1)
      if (i === levelSize - 1) result.push(currentNode.val);
      // add left and right children to the queue if they exist 
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  // return the result outside of the loops 
  return result; 
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