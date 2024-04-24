/* 
Given a binary tree root, a node X in the tree is named good if in the path from root 
to X there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2:
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

Example 3:
Input: root = [1]
Output: 1
Explanation: Root is considered as good.
*/

/* STRATEGY:
- starts a depth-first search (DFS) from the root, passing the current node and the maximum value 
along the path (maxVal).
- it checks whether each node's value is greater than or equal to maxVal
- If it is, the node is considered "good."
- maxVal is updated to be the maximum between its current value and the current node's value.
- returns the sum of the "good" nodes plus the count of good nodes in the left and right subtrees.
*/

/* TIME AND SPACE COMPLEXITY:
- time: O(n) - n is total number of nodes in binary tree 
- space: O(h) - h is height of binary tree (recursive nature of DFS, stack proportional to tree height)
*/

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const goodNodes = root => {
  // define a function dfs that takes the node and maxVal as parameters
  const dfs = (node, maxVal) => {
    // base case: if the node is null, return 0 
    if (!node) return 0;
    // check if current node is "good" with ternary operator 
    // define variable isGood assigned to checking if node.val is greater than maxVal? true is 1, false is 0
    let isGood = node.val >= maxVal ? 1 : 0; 
    // reassign maxVal to Math.max of maxVal and node.val 
    maxVal = Math.max(maxVal, node.val);
    // recursively check left and right children by returning...
    return (
      // the variable isGood plus...
      isGood +
      // eval result of calling dfs, passing in node.left and maxVal (left subtree) plus...
      dfs(node.left, maxVal) +
      // eval result of calling dfs, passing in node.right and maxVal (right subtree) 
      dfs(node.right, maxVal)
    );
  };
  // return dfs, passing in root and root.val (as the start) 
  return dfs(root, root.val);
};

/* // TESTS:
const root1 = new TreeNode(3, 
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5)),
);

console.log(goodNodes(root1)); // output: 4

const root2 = new TreeNode(3,
  new TreeNode(3, new TreeNode(4), new TreeNode(2)),
);

console.log(goodNodes(root2)); // output: 3

const root3 = new TreeNode(1); 
console.log(goodNodes(root3)); // output: 1 
 */