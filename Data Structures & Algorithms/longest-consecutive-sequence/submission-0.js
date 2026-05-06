class Solution {
    longestConsecutive(nums) {
 let a = nums.sort((a,b) => a - b);
let count = 0
let max = 0
if(nums.length === 1) return 1
for (let i = 0; i < a.length; i++) {
    if(a[i] === a[i+1]) continue
    if (a[i+1] - a[i] === 1) {
        count++
    } else {
        if(count >= max) {
            max = count + 1
        } 
        count = 0
    }
}   

return max
    }
}
