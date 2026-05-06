class Solution {
    asteroidCollision(asteroids) {
        const stack = []
    for(let x of asteroids) {
        let alive = true
        while(alive && x < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
        let topEle = stack[stack.length - 1]
            if(topEle < -x ) {
                stack.pop()
                continue
            }else if (topEle === -x) {
                stack.pop()
                alive = false
            } else if (topEle > -x) {
                alive = false
            }
        }

        if(alive) {
            stack.push(x)
        }
    }
    return stack
    }
}
