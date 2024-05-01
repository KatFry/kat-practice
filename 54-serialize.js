/* 
Serialization is the process of converting a data structure or object into a sequence of bits so that it can
be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed
later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your 
serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be 
serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. 
You do not necessarily need to follow this format, so please be creative and come up with different 
approaches yourself.

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:
Input: root = []
Output: []
*/

/* EXPLANATION:
- serialization: 
  - uses level-order traversal to convert binary tree to a comma-separated string 
  - stores 'null' for missing nodes to maintain the structure
- deserialization:
  - splits the string into an array and uses level-order traversal to rebuild the tree 
  - maintain a queue to track parent-child relationships 
*/

// Define the TreeNode class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Class to serialize and deserialize a binary tree
class Codec {
  // Serialize a binary tree to a string
  serialize(root) {
    if (!root) return ''; // Return an empty string if the root is null
    const queue = [root]; // Use a queue for level-order traversal
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Get the current node from the queue
      if (currentNode) {
        result.push(currentNode.val); // Add the node's value to the result
        queue.push(currentNode.left); // Add the left child to the queue
        queue.push(currentNode.right); // Add the right child to the queue
      } else {
        result.push('null'); // Add 'null' for missing nodes
      }
    }

    // Trim trailing 'null' values to avoid unnecessary data
    while (result.length && result[result.length - 1] === 'null') {
      result.pop();
    }

    return result.join(','); // Return the trimmed result
  }

  // Deserialize a string to a binary tree
  deserialize(data) {
    if (!data) return null; // Return null if the string is empty
    const nodes = data.split(','); // Split the string into an array of values
    const root = new TreeNode(parseInt(nodes[0])); // Create the root node
    const queue = [root]; // Use a queue to rebuild the tree
    let index = 1; // Start from the second element in the array

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Get the current node from the queue

      // Rebuild the left child
      if (index < nodes.length && nodes[index] !== 'null') {
        currentNode.left = new TreeNode(parseInt(nodes[index]));
        queue.push(currentNode.left);
      }
      index++; // Move to the next node in the array

      // Rebuild the right child
      if (index < nodes.length && nodes[index] !== 'null') {
        currentNode.right = new TreeNode(parseInt(nodes[index]));
        queue.push(currentNode.right);
      }
      index++; // Move to the next node in the array
    }

    return root; // Return the rebuilt binary tree
  }
};


// TESTS:
const codec = new Codec();

// Test case 1: Serialize and deserialize a tree
const root1 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);
const serialized1 = codec.serialize(root1); // Output: "1,2,3,null,null,4,5"
const deserialized1 = codec.deserialize(serialized1);
console.log(codec.serialize(deserialized1)); // Should match the original output: "1,2,3,null,null,4,5"

// Test case 2: Serialize and deserialize an empty tree
const serialized2 = codec.serialize(null); // Output: ""
const deserialized2 = codec.deserialize(serialized2);
console.log(codec.serialize(deserialized2)); // Should be an empty string
