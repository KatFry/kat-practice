/* Remember - shift option A for comments like this! */

/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:

https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/

// input: array of arrays 
// output: boolean value 


/*  OVERALL STRATEGY: 
strategy: basically for it to be valid, have to make sure that neither row or column have duplicate of that number
  if that is true for any number,  then it is invalid (return false) 

  loop over the array of arrays 

    make sure within each array, there is only one copy of each number 

    also make sure at same position in every other array (say 5 is in second column), 
    there isn't the same number at the same position (another 5 any number of rows down in second column) 

    final check - there is no repetition in any individual 9x9 sudoku box 

  otherwise return true if all of these checks are passed 
*/


/* OPTION 1: brute force (aid from https://www.youtube.com/watch?v=wjkKd5yBxRA) */
// since board size is fixed, time and space complexity is constant 
// brute force because it is direct translation of thought process into code 

const validSudoku1 = board => {
  // nested for loop: check rows, then columns, then sub-boxes 
  // i iterates from 0 to board length, 9, similar for j 
  for (let i = 0; i < board.length; i++) {
    // check for ROW duplicates by initializing a set before we examine each row
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      // get value of specific cell with below syntax 
      // i corresponds to rows, j to columns 
      const cell = board[i][j];
      // if the cell is empty, value is '.', then skip 
      if (cell === '.') continue;
      // if the set already has value of current cell, return false 
      if (set.has(cell)) return false;
      // but if we haven't seen that value before, add it to the set for future reference
      set.add(cell);
    }
  }

  // check for COLUMN duplicates (very similar to checking rows) 
  for (let i = 0; i < board.length; i++) {
    // check for ROW duplicates by initializing a set before we examine each row
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      // get value of specific cell with below syntax 
      // ONLY DIFFERENT THING: switch i and j here, so go through column first!! 
      // j would correspond to rows, i to columns 
      const cell = board[j][i];
      // if the cell is empty, value is '.', then skip 
      if (cell === '.') continue;
      // if the set already has value of current cell, return false 
      if (set.has(cell)) return false;
      // but if we haven't seen that value before, add it to the set for future reference
      set.add(cell);
    }
  }

  // check each sub-box with another nested for loop
  // i is less than 3 because we only have 3 rows of sub-boxes (same with columns)
  // i represents row of sub-box, j represents column of sub-box
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();
      // loop through each element of the sub-box (k and l are row and column of element in sub-box)
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          // get the value of the cell - find the formula 
          const cell = board[3 * i + k][3 * j + l]; 
          // do the checks again 
          if (cell === '.') continue;
          if (set.has(cell)) return false;
          set.add(cell); 
        }
      }

    }
  }
  // if all these conditions are passed, return true 
  return true; 
}

// TESTS:
/* console.log(validSudoku1([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));  // should return true

console.log(validSudoku1([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])); // should return false (for reasoning above)
 */

/* OPTION 2: just one nested for loop! */

const validSudoku2 = board => {
  // with this solution, I need a different set for every row, every column, every sub-box
  const rows = [], cols = [], boxes = [];
  // initialize sets by push a new set into arrays - 9 sets for 9 rows, etc., etc. 
  for (let i = 0; i < board.length; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set()); 
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      // need to make sure we're using the right set since we have so many
      // rows represented by i, columns represented by j 
      // if we see a duplicate in either the row or the column, return false 
      if (rows[i].has(cell) || cols[j].has(cell)) return false;
      // record current value of cell in set for row i, and col j 
      rows[i].add(cell); 
      cols[j].add(cell);
    }
  }
  // if all checks pass, return true
  return true; 
}



/* // TESTS:
console.log(validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));  // should return true

console.log(validSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])); // should return false (for reasoning above)
*/

/* // TESTS:
console.log(validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));  // should return true

console.log(validSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])); // should return false (for reasoning above)
*/



