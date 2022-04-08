/*

After catching your classroom students cheating before, you realize your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
	['c', 'c', 'x', 't', 'i', 'b'],
	['c', 'c', 'a', 't', 'n', 'i'],
	['a', 'c', 'n', 'n', 't', 't'],
	['t', 'c', 's', 'i', 'p', 't'],
	['a', 'o', 'o', 'o', 'a', 'a'],
	['o', 'a', 'a', 'a', 'o', 'o'],
	['k', 'a', 'i', 'c', 'k', 'i'],
]
word1 = "catnip"
word2 = "cccc"
word3 = "s"
word4 = "bit"
word5 = "aoi"
word6 = "ki"
word7 = "aaa"
word8 = "ooo"

grid2 = [['a']]
word9 = "a"

find_word_location(grid1, word1) => [ (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]
find_word_location(grid1, word2) =>
       [(0, 1), (1, 1), (2, 1), (3, 1)]
    OR [(0, 0), (1, 0), (1, 1), (2, 1)]
    OR [(0, 0), (0, 1), (1, 1), (2, 1)]
    OR [(1, 0), (1, 1), (2, 1), (3, 1)]
find_word_location(grid1, word3) => [(3, 2)]
find_word_location(grid1, word4) => [(0, 5), (1, 5), (2, 5)]
find_word_location(grid1, word5) => [(4, 5), (5, 5), (6, 5)]
find_word_location(grid1, word6) => [(6, 4), (6, 5)]
find_word_location(grid1, word7) => [(5, 1), (5, 2), (5, 3)]
find_word_location(grid1, word8) => [(4, 1), (4, 2), (4, 3)]
find_word_location(grid2, word9) => [(0, 0)]

Complexity analysis variables:

r = number of rows
c = number of columns
w = length of the word
*/

const grid1 = [
	['c', 'c', 'x', 't', 'i', 'b'],
	['c', 'c', 'a', 't', 'n', 'i'],
	['a', 'c', 'n', 'n', 't', 't'],
	['t', 'c', 's', 'i', 'p', 't'],
	['a', 'o', 'o', 'o', 'a', 'a'],
	['o', 'a', 'a', 'a', 'o', 'o'],
	['k', 'a', 'i', 'c', 'k', 'i']
];
const word1 = "catnip";
const word2 = "cccc";
const word3 = "s";
const word4 = "bit";
const word5 = "aoi";
const word6 = "ki";
const word7 = "aaa";
const word8 = "ooo"; 

const grid2 = [['a']];
const word9 = "a";

const directions= [
  [0, 1], //right
  [1,0] //down
]
//find_word_location(grid1, word1) => [ (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]

const find_word_location = (board, word) => {
  // loop through each cell
  let values = [];
    for (let i=0; i< board.length; i++) {
      for(let j=0; j< board[i].length; j++) {
         //values.pop();
         values = [];
        // check if current cell value is equal to first letter in word && start dept first search
        if (board[i][j] == word.charAt(0) && dfs(board, i, j, 0, word, values)) return values
      }
    }
    // return fasle , since true was not retun from dfs
    return []
  }


  // dfs algo
  function dfs(board, i, j, count, word, values) {
    // return true if count is equal to word length
    if (count == word.length) return true
    // return false if current i,j is out of bounds and current word equality with word letter(word.charAt(count))
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != word.charAt(count)) return false
    // store current cell value in temp and mark it as ' '
   // console.log(board[i][j]);
    values.push([i,j]);
    let temp = board[i][j]
    board[i][j] = ' '
    // search for consequent letter in all right and down directions and store it in 'found' variable
    let found = dfs(board, i + 1, j, count + 1, word, values)  || dfs(board, i , j + 1 , count + 1, word, values)
    console.log(board);
    // for all directions
    // let found = dfs(board, i + 1, j, count + 1, word) || dfs(board, i - 1, j, count + 1, word) || dfs(board, i , j + 1 , count + 1, word)|| dfs(board, i , j - 1 , count + 1, word) 
    // add back value of current cell
    board[i][j] = temp
    console.log(board);
    return found;
  }



console.log(find_word_location(grid1, word1));