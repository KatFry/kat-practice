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
    // sets help in this problem because they only store unique values!
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      // get value of specific cell with below syntax 
      // i corresponds to rows, j to columns 
      const cell = board[i][j]; // specifies that cell only (position across and down)
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

/* Breakdown of the formula in line 129:
The formula `board[3 * i + k][3 * j + l]` is used to traverse the cells of the 3x3 sub-boxes 
when checking for duplicates. Let's break down how this formula works:

- `i` and `j` represent the indices of the sub-boxes. 
Since there are 3 sub-boxes in each row and column, `i` and `j` range from 0 to 2.

- `k` and `l` represent the indices within each sub-box. They also range from 0 to 2.

Now, let's break down the formula:

- `3 * i + k`: This part calculates the row index of the cell within the entire board. 
It's based on the fact that each sub-box has 3 rows, and `i` determines which set of 3 rows (sub-boxes) we're in. 
The variable `k` then determines the specific row within that set of 3.

- `3 * j + l`: Similar to the row index, this part calculates the column index of the cell within the entire board.
`j` determines which set of 3 columns (sub-boxes) we're in, and `l` determines the specific column 
within that set of 3.

So, putting it all together, `board[3 * i + k][3 * j + l]` gives us the indices of the cell within the entire board,
taking into account both the sub-box position (`i` and `j`) and the position within the sub-box (`k` and `l`). 
This formula allows us to iterate through each cell of the 3x3 sub-boxes in the larger 9x9 board. 
*/

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
/* runs faster than first solution, but takes up more memory
still constant time and space complexity bc board has fixed dimensions   */

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
      // formula for each individual box check:
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3); 
      // need to make sure we're using the right set since we have so many
      // rows represented by i, columns represented by j 
      // if we see a duplicate in either the row, column, or box, return false 
      if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) 
        return false;
      // record current value of cell in set for row i, and col j 
      rows[i].add(cell); 
      cols[j].add(cell);
    }
  }
  // if all checks pass, return true
  return true; 
}


/* Breakdown of the formula above:
The formula for calculating `boxNum` is designed to map the 2D indices (`i` and `j`)
to a unique index for each 3x3 sub-box. 
Here's a breakdown of the formula:

- `Math.floor(i / 3)`: This part divides the row index (`i`) by 3 and takes the floor, 
effectively grouping every three rows together. 
So, for rows 0, 1, 2, `Math.floor(0 / 3) = 0`, for rows 3, 4, 5, `Math.floor(3 / 3) = 1`, and so on.

- `Math.floor(j / 3)`: Similar to the row index, this part groups every three columns together.

- `3 * Math.floor(i / 3) + Math.floor(j / 3)`: Combining the two expressions above, 
this formula calculates a unique index for each 3x3 sub-box. 
For each 3x3 sub-box, `i / 3` will be the same for the three rows, 
and `j / 3` will be the same for the three columns. 
Multiplying `Math.floor(i / 3)` by 3 ensures that the index increases by 3 for every three rows, 
and adding `Math.floor(j / 3)` ensures that the index increases within each group of three columns.

Here's a small example:

- For the top-left 3x3 sub-box (indices 0, 0), `Math.floor(0 / 3) * 3 + Math.floor(0 / 3) = 0`.
- For the middle 3x3 sub-box (indices 3, 3), `Math.floor(3 / 3) * 3 + Math.floor(3 / 3) = 4`.
- For the bottom-right 3x3 sub-box (indices 6, 6), `Math.floor(6 / 3) * 3 + Math.floor(6 / 3) = 8`.

This way, the formula guarantees a unique index for each 3x3 sub-box, 
which is essential for checking the uniqueness of numbers within each sub-box.
*/

/* // TESTS:
console.log(validSudoku2([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));  // should return true

console.log(validSudoku2([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])); // should return false (for reasoning above)
 */

/* OPTION 3: have one set instead of arrays of sets */
const validSudoku3 = board => {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3); 

      // define variable row assigned to a string, specify what row and value
      const row = `row: ${i}, value ${cell}`;
      const col = `col: ${j}, value ${cell}`;
      const box = `box: ${boxNum}, value ${cell}`;
      // console.log(row);
      // easily check for duplicates 
      if (set.has(row) || set.has(col) || set.has(box)) return false;
      set.add(row); 
      set.add(col);
      set.add(box);
    }
  }
  // if all checks pass, return true
  return true;
}


/* // TESTS:
console.log(validSudoku3([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));  // should return true

console.log(validSudoku3([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])); // should return false (for reasoning above)
 */
