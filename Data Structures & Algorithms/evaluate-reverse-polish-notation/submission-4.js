class Solution {
    evalRPN(tokens) {
        let result  = 0
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            let currentChar = tokens[i]
            let p1 = stack[stack.length - 1]
            let p2 = stack[stack.length - 2]
            if (currentChar === "+") {
                result  = p1 + p2
                stack.pop()
                stack.pop()
                stack.push(result)
                continue
            }

                if (currentChar === "-") {
                result  = p2 - p1
                stack.pop()
                stack.pop()
                stack.push(result)
                     continue
            }

                  if (currentChar === "*") {
                result  = p1 * p2
                    stack.pop()
                stack.pop()
                stack.push(result)
                     continue
            }

                      if (currentChar === "/") {
              result = Math.trunc(p2 / p1)
                   stack.pop()
                stack.pop()
                stack.push(result)
                     continue
            }

            stack.push(Number(currentChar))

        }
        return stack[0]
    }
}
