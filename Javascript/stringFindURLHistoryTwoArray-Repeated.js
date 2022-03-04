
const user0 = ["start", "pink", "register", "orange", "red", "a"]
const user1 = ["start", "yellow", "plum", "blue", "pink", "register", "orange", "onetwo"]
const user2 = ["a", "one", "two"]
const user3 = ["pink", "orange", "yellow", "plum", "blue", "tan", "red", "amber", "HotRodPink", "CornflowerBlue", "LightGoldenRodYellow", "BritishRacingGreen"]
const user4 = ["pink", "orange", "amber", "BritishRacingGreen", "plum", "blue", "tan", "red", "lavender", "HotRodPink", "CornflowerBlue", "LightGoldenRodYellow"]
const user5 = ["a"]
const user6 = ["pink","orange","six","plum","seven","tan","red", "amber"];

const findContiguousHistory = (user0, user1) => {
    let result = [];
    let dpArray = new Array(user0.length)
        .fill(0)
        .map(() => new Array(user1.length).fill(0));
    let max = 0;
    let lastIndex = -1;
    for (let i = 0; i < dpArray.length; i++) {
        for (let j = 0; j < dpArray[0].length; j++) {
            if (user0[i] === user1[j]) {
                if (i > 0 && j > 0) {
                    dpArray[i][j] = dpArray[i - 1][j - 1] + 1;
                } else {
                    dpArray[i][j] = 1;
                }
                if (max < dpArray[i][j]) {
                    max = dpArray[i][j];
                    lastIndex = i;
                }
            }
        }
    }

    if (lastIndex !== -1) {
        result = new Array(max);

        for (let i = max; i > 0; i--) {
            result[i - 1] = user0[lastIndex];
            lastIndex--;
        }
    }

    return result;
}

console.log(findContiguousHistory(user0, user1));
console.log(findContiguousHistory(user0, user2));
console.log(findContiguousHistory(user2, user1));
console.log(findContiguousHistory(user5, user2));
console.log(findContiguousHistory(user3, user4));
console.log(findContiguousHistory(user4, user3));
console.log(findContiguousHistory(user3, user6));

function lcs(user0 , user1) {
    let dpArray = new Array(user0.length)
    .fill(null)
    .map(() => new Array(user1.length).fill(null));
    let m = user0.length;
    let n = user1.length;
   console.log(dpArray);
    for(i = 0; i < m; i++) {
      for(j = 0; j < n; j++) {
        if (i == 0 || j == 0){
            console.log(i + ' '+ j);

            dpArray[i][j] = 0
        }
        else if(user0[i-1] == user1[j-1]) {
            dpArray[i][j] = dpArray[i-1][j-1] + 1;
        }
        else{
            dpArray[i][j] = Math.max(dpArray[i-1][j], dpArray[i][j-1])
        }
      }
    }
  
    return dpArray;
  }



