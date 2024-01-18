/*Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

// input: nums (array of integers), k (integer)
// output: array of numbers - most frequent elements in any element 

// OPTION 1: Using a simple object for storage
const kFrequentElements = (nums, k) => {
  // declare a const called freqs assigned to an empty object
  const freqs = {};
  // loop over the nums array, storing how many times each num appears
  for (const num of nums) {
    // if the key doesn't exist, add it 
    if (freqs[num] === undefined) freqs[num] = 1;
    // else add 1 
    else freqs[num] + 1;
  }

  // convert to an array 
  const freqArray = [];
  for (const key in freqs) {
    freqArray.push([freqs[key], key]);
  }

  // sort in descending order
  freqArray.sort((a, b) => b[0] - a[0]);
  console.log(freqArray);

  // get mostFreq and return 
  const mostFreq = []; 
  for (let i = 0; i < k; i++) {
    // the below line is accessing the 2nd el of each pair, the actual number that appeared in original array 
    mostFreq.push(freqArray[i][1]);
  }
  return mostFreq;
}

console.log(kFrequentElements([1,1,1,2,2,3], 2)); // should return [1, 2]
console.log(kFrequentElements([1], 1)); // should return [1]


// OPTION 2: using a Map and sorting 
const kFrequentElements2 = (nums, k) => {
  // declare a const assigned to a new instance of a Map constructor
  const freqMap = new Map();

}

