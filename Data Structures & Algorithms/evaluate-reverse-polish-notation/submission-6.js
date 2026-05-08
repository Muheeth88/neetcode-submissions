class Solution {
    evalRPN(tokens) {
  
        let stack = [];
        for (let char of tokens) {
            if(char === "+") {
                let b = stack.pop()
                let a = stack.pop()
                stack.push(a + b)
            } else if(char === "-") {
                   let b = stack.pop()
                let a = stack.pop()
                stack.push(a - b)
            } else if(char === "*") {
                  let b = stack.pop()
                let a = stack.pop()
                stack.push(a * b)
            } else if(char === "/") {
                  let b = stack.pop()
                let a = stack.pop()
                stack.push(Math.trunc(a / b))
            } else {
                stack.push(Number(char));
            }
        }
        return stack[0]
    }
}
