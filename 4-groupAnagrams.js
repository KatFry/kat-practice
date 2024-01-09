/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// input: array of strings
// output: array of arrays (anagrams grouped together)

// OPTION 1: without a Map 
const groupAnagrams = strs => {
  // declare a const anagramsObj initialized to an empty object 
  const anagramsObj = {};
  // iterate over the array of strings
  for (const str of strs) {
    // first check if every el is a string - if not, return 'all elements in array must be strings'
    if (typeof str !== "string") return 'all elements in array must be strings';
    // declare a const sortedStr assigned to splitting the str, sorting it, and joining it back together 
    const sortedStr = str.split('').sort().join('');
    // console.log(sortedStr);

    // if the sortedStr doesn't exist as a key in the obj, assign it to an empty array 
    if (!anagramsObj[sortedStr]) anagramsObj[sortedStr] = [];

    // push original string to corresponding group in in object
    anagramsObj[sortedStr].push(str);
  }
  // return object values converted to an array 
  return Object.values(anagramsObj);
}

// OPTION 2: using a Map constructor 
// const groupAnagrams = strs => {
//   // declare a const called anagramsMap assigned to a new Map
//   const anagramsMap = new Map();
//   // iterate over each str in the array (would also include check here to make sure all are strings)
//   for (const str of strs) {
//     // convert str to array, sort, and rejoin 
//     const sortedStr = str.split('').sort().join('');
//     // use sortedStr as a key in the map (if sortedStr doesn't exist, set it as key, value as empty array)
//     if (!anagramsMap.has(sortedStr)) anagramsMap.set(sortedStr, []);
//     // push original string to corresponding group in map
//     anagramsMap.get(sortedStr).push(str);
//   }
//   // convert map values to array to get final result
//   return Array.from(anagramsMap.values());
// }

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // returns [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // returns [[""]]
console.log(groupAnagrams(["a"])); // returns [["a"]]
console.log(groupAnagrams(["net", "tea", "ant", "bat", 10])); // returns 'all elements in array must be strings'