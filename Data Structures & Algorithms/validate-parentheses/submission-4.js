class Solution {
    isValid(s) {
        let map = {
            ")": "(",
            "}" : "{",
            "]" : "["
        }
        let stack = []

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char)
            } else {
                let topChar = stack.pop()
                if (topChar !== map[char]) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
