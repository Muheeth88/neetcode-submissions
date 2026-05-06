class Solution {
    twoSum(numbers, target) {
         let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; 
    }
}
