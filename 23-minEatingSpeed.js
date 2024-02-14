/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead 
and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/

/* STRATEGY: binary search
input: piles (array of integers), h (number of hours)
output: number (eating speed)
*/

// first define a function canEatAll to check if it's possible to eat all the bananas withen the given time 
// this function takes piles, k, and h as parameters 
const canEatAll = (piles, k, h) => {
  // declare a variable hoursNeeded initialized to 0 
  let hoursNeeded = 0;
  // iterate over the piles 
  for (const pile of piles) {
    // add to the hoursNeeded variable Math.ceil of the pile divided by k (rounds up to smallest integer >= num)
    // use Math.ceil because you need at least that many hours to eat it all 
    hoursNeeded += Math.ceil(pile / k); 
  }
  // return the outcome of checking if hoursNeeded is less than or equal to h (hours available)
  return hoursNeeded <= h;
}

const minEatingSpeed = (piles, h) => {
  // search space for k is between max number of bananas in a single pile 
  // initialize left pointer to 1 (minimum possible eating speed)
  let left = 1;
  // initialize right pointer to Math.max of passing in piles array using spread syntax (max eating speed)
  let right = Math.max(...piles);
  // while left is less than right 
  while (left < right) {
    // declare a const mid assigned to Math.floor of left plus right divided by 2 
    const mid = Math.floor((left + right) / 2);
    // if canEatAll returns true when passing in piles, mid, and h, search in left half for smaller k 
    // this indicates a smaller eating speed might be valid! 
    if (canEatAll(piles, mid, h)) right = mid;
    // else search in right half for larger k (larger eating speed is needed!)
    else left = mid + 1; 
  }
  // return left (because at end of search, it points to smallest valid eating speed)
  return left;
} 


/* // TESTS:
console.log(minEatingSpeed([3,6,7,11], 8)); // -> 4
console.log(minEatingSpeed([30,11,23,4,20], 5)); // -> 30
console.log(minEatingSpeed([30,11,23,4,20], 6)); // -> 23
 */