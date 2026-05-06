class Solution {

    isValid(s) {
        let stack = [];
        let map = {
            ")": "(",
            "}": "{",
            "]": "["
        };

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if ( stack[stack.length - 1] === map[char]) {
                stack.pop();
                } else {
                    return false
                }
            }
        }

        return stack.length === 0;

    }
}
