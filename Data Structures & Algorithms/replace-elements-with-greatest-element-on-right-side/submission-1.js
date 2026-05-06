class Solution {
    replaceElements(arr) {
        const n = arr.length
        let max = -1
        let res = []
        for(let i = n-1; i >= 0; i--) {
            res[i] = max

            if(arr[i] > max) {
                max = arr[i]
            }
            console.log("aft>>>", "i=", i, "Max=", max, "arr=", arr)
        }
        
        return res
    }
}
