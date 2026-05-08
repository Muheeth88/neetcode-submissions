class Solution {
    carFleet(target, position, speed) {
        const cars = []
        const stack = []
        for (let i = 0; i < position.length; i++) {
            cars[i] = [position[i], speed[i]]
        }

        const sorted = cars.sort((a,b) => b[0] - a[0])

        const time = sorted.map((n) => (target - n[0])/n[1])
        console.log(sorted, time)
        for (let sp of time) {
            if (stack.length === 0 || sp > stack[stack.length - 1]) {
                stack.push(sp)

            }
        }
        return stack.length
    }

}
