const arr = [10, 3, -4, 1, -6, 9];

/*
Given an integer array arr of size n, find all magic triplets in it.
Magic triplet is a group of three numbers whose sum is zero.
Note that magic triplets may or may not be made of consecutive numbers in arr.
Example One
Input: arr = [10, 3, -4, 1, -6, 9]
Output: [“10,-4,-6”, “3,-4,1”]
Example Two
Input: arr = [12, 34, -46]
Output: [“12,-46,34”]
*/
const findZeroSum = (arr) => {
        const answer = {};
        arr.sort(function(a, b){return a-b});; // A prerequisite for the two pointer technique to work.
        let n = arr.length;
        for (let index = 0; index < n; index++) {
            let currentElement = arr[index];
            // We will look for two elements that sum up to this:
            let neededSum = -currentElement;
            console.log('neededsum' + neededSum);
            let left = index + 1, right = n - 1;
            while (left < right) {
                let sum = arr[left] + arr[right];
                if (sum == neededSum) {
                    answer[currentElement] = currentElement + "," + arr[left] + "," + arr[right];
                    left++; // "right--" would also work fine here.
                   
                } else if (sum > neededSum) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return answer;
    }

    console.log(findZeroSum(arr));