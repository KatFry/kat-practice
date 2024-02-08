/* 
There are n cars going to the same destination along a one-lane road. 
The destination is target miles away.

You are given two integer array position and speed, both of length n, 
where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it,
but it can catch up to it and drive bumper to bumper at the same speed. 
The faster car will slow down to match the slower car's speed. 
The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. 
Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

 

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. 
The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.

Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation: There is only one car, hence there is only one fleet.

Example 3:
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. 
The fleet moves at speed 2.
Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, 
meeting each other at 6. The fleet moves at speed 1 until it reaches target.
*/

/* time and space complexity:
- time: "linearithmic"
  - sorting: O(n log n) - where n is the number of cars ("linearithmic" - combo of linear and logarithmic (O(log n))
  - iteration through cars: O(n) - where n is the number of cars
  - overall: dominant factor is sorting stop, so O(n log n)
- space: linear 
  - array of car objects: O(n) - where n is number of cars
  - overall: O(n) 
*/

// input: target (number), position (array), speed (array) 
// output: number (number of car fleets that will arrive at destination)
const carFleet = (target, position, speed) => {
  // declare a constant n assigned to the length of the position array 
  const n = position.length;
  // declare a const cars initialized to an empty array 
  const cars = [];
  // iterate over n 
  for (let i = 0; i < n; i++) {
    // combine the position and speed into key/value object pairs and push to the cars stack 
    cars.push({position: position[i], speed: speed[i]}); 
  }
  // sort the cars in descending order by position 
  cars.sort((a, b) => b.position - a.position);
  // declare a variable fleets initialized to 0
  let fleets = 0;
  // declare a variable maxTime initialized to -Infinity
  let maxTime = -Infinity;
  // iterate over n again 
  for (let i = 0; i < n; i++) {
    // declare a const time assigned to the target minus the car at i's position divided by its speed 
    const time = (target - cars[i].position) / cars[i].speed;
    // check if the time is greater than the maxTime...
    if (time > maxTime) {
      // if so, reassign maxTime to time (car forms a new fleet)
      maxTime = time;
      // increment the fleets variable
      fleets++;
    }
  }
  // return the fleets 
  return fleets;
}

/* // TESTS:
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // -> 3
console.log(carFleet(10, [3], [3])); // -> 1 
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // -> 1 
 */