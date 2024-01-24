/* Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9 */

// input: array of numbers 
// output: number 
const longestConsecutive = nums => {
  // check: if nums doesn't exist or the length is 0, return 0
  if (!nums || nums.length === 0) return 0;
  // initialize a set to store the numbers (inserting nums)
  const numSet = new Set(nums);
  // initialize a variable maxLen to 0 
  let maxLen = 0;
  // check if each number in the array is the start of the sequence 
  // do this by making sure the previous num (num - 1) is not in the set 
  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      // then assign currentNum to that num
      let currentNum = num;
      // assign currentLen to 1 
      let currentLen = 1;
      // if it is the start, start expanding from there
      while (numSet.has(currentNum + 1)) {
        // increment both currentNum and currentLen
        currentNum++;
        currentLen++;
      }
      // assign maxLen to Math.max between maxLen and currentLen
      maxLen = Math.max(maxLen, currentLen);
    }
  }
  // return the max length
  return maxLen;
}

/* // TESTS:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 ([1, 2, 3, 4])
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9 ([0, 1, 2, 3, 4, 5, 6, 7, 8])
*/