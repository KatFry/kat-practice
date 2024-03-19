/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/* OVERALL STRATEGY:
Iterate through the array of prices while keeping track of the minimum price so far and
the maximum profit achievable. 
*/

/* 
input: array of integers (prices of given stocks)
output: number (maximum profit you can achieve on this transaction)
*/
const maxProfit = prices => {
  // initialize a variable minPrice to the first price in the array 

  // initialize a variable maxPrice to 0 to be updated later

  // iterate through the prices array starting at the second day (index 1 instead of 0)

    // declare a const potentialProf assigned to the prices array at i minus the minPrice

    // update maxProfit: reassign it to the Math.max of maxProfit and potentialProf

    // update minPrice: reassign it to Math.min of minPrice and prices at i 

  // return maxProfit 
  
};

/* // TESTS:
console.log(maxProfit([7,1,5,3,6,4])); // -> 5
console.log(maxProfit([7,6,4,3,1])); // -> 0
*/