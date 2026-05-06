class Solution {
    calPoints(operations) {
        let stack = [];
        let total = 0
        for (let char of operations) {
            if (char === "+") {
                let x = stack[stack.length - 1] + stack[stack.length - 2]
                stack.push(x)
                total = total + x
            } else if (char === "D") {
                let x = 2 * stack[stack.length - 1] 
                stack.push(x)
                total = total + x
            } else if (char === "C") {
                let x = stack.pop()
                total = total - x
            } else {
                let x = Number(char)
                stack.push(x)
                total = total + x
            }
        }

        return total
    }
}
