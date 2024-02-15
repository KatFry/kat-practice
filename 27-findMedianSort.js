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

/* OPTION 1: doesn't satisfy requirements of question 
- time: O(m + n) - iterate through both arrays once to merge
- space: O(m + n) also 
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
};

/* // TESTS:
console.log(findMedianSort([1,3], [2])); // -> 2.00000 
console.log(findMedianSort([1,2], [3,4])); // -> 2.50000 
*/

/* OPTION 2: binary search solution
- time: O log (m + n)
*/

const findMedianSort2 = (nums1, nums2) => {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  // find totalLength property by adding lengths of nums1 and nums2
  const totalLength = nums1.length + nums2.length;
  // find the halfLength by dividing by 2
  const halfLength = Math.floor((totalLength + 1) / 2);

  // initialize pointers: left to 0, right to nums1 length 
  let left = 0;
  let right = nums1.length;

  // loop while left is less than or equal to right 
  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = halfLength - partition1;

    const maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : Number.MIN_SAFE_INTEGER;
    const minRight1 = partition1 < nums1.length ? nums1[partition1] : Number.MAX_SAFE_INTEGER;

    const maxLeft2 = partition2 > 0 ? nums2[partition2 - 1] : Number.MIN_SAFE_INTEGER;
    const minRight2 = partition2 < nums2.length ? nums2[partition2] : Number.MAX_SAFE_INTEGER;

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // Found the correct partition, calculate the median
      if (totalLength % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // Adjust the partition in nums1
      right = partition1 - 1;
    } else {
      // Adjust the partition in nums1
      left = partition1 + 1;
    }
  }

  // If we reach here, the input arrays are not sorted, or there's some other issue.
  throw new Error('Input arrays are not sorted!');
};

/* // TESTS:
console.log(findMedianSort2([1,3], [2])); // -> 2.00000 
console.log(findMedianSort2([1,2], [3,4])); // -> 2.50000 
 */
