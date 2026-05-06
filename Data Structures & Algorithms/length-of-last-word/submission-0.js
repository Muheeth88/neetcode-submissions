class Solution {
    lengthOfLastWord(s) {
        const arr = s.trim().split(" ")
        console.log(arr)
        return arr[arr.length -1].length
    }
}
