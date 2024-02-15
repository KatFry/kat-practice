/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

// input: nums1 and nums2 - 2 sorted arrays
// output: median of the 2 sorted arrays as a decimal 
const findMedianSort = (nums1, nums2) => {
  // merge the two sorted arrays by using spread operator and sort method
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  // assign a constant length to the length of the merged array
  const length = merged.length;
  // check if the length is even or odd
  if (length % 2 === 0) {
    // if it is even, find the two middle elements and calc average
    // assign mid1 to merged at the length div by 2 minus 1 
    // (minus 1 here because indices are zero-indexed) 
    const mid1 = merged[length / 2 - 1];
    // assign mid2 to merged at the length divded by 2
    const mid2 = merged[length / 2];
    // calc average: return mid1 plus mid2 divded by 2
    return (mid1 + mid2) / 2; 
  }
  // else if the length is odd, return merged at Math.floor of length div by 2
  else return merged[Math.floor(length / 2)]; 
}

/* // TESTS:
console.log(findMedianSort([1,3], [2])); // -> 2.00000 
console.log(findMedianSort([1,2], [3,4])); // -> 2.50000 
*/