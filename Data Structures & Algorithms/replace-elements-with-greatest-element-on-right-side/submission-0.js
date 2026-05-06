class Solution {
    replaceElements(arr) {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length - 1) {
                result.push(-1)
                continue
            }

            const sliced = arr.slice(i+1 , arr.length)
            const max = Math.max(...sliced)
            console.log("Sliced>>>", sliced, max, ...sliced)
            result.push(max)
        }
        
        return result
    }
}
