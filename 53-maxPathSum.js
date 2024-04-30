/* 
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge 
connecting them. A node can only appear in the sequence at most once. Note that the path does not need to 
pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const maxPathSum = root => {
  let maxSum = -Infinity; // Initialize the maximum path sum to negative infinity

  // Recursive helper function to calculate the maximum path sum for a given node
  const calculateMaxSum = (node) => {
    if (!node) {
      return 0; // Base case: If the node is null, return 0
    }

    // Calculate the maximum path sum from the left subtree and the right subtree
    const leftMax = Math.max(0, calculateMaxSum(node.left)); // Consider only positive sums
    const rightMax = Math.max(0, calculateMaxSum(node.right)); // Consider only positive sums

    // Update the global maximum path sum considering the current node
    maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

    // Return the maximum path sum considering the current node as a "subtree root"
    return node.val + Math.max(leftMax, rightMax);
  };

  calculateMaxSum(root); // Start the recursive calculation from the root
  return maxSum; // Return the global maximum path sum
};

/* // TESTS:
const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root1)); // Output: 6

const root2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxPathSum(root2)); // Output: 42
*/