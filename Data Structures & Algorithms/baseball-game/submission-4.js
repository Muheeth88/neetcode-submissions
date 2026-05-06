class Solution {
    calPoints(operations) {
        const result = []
        for(let i = 0; i < operations.length; i++) {
            console.log("isNumber", !isNaN(Number(operations[i])))

            if(!isNaN(Number(operations[i])) && typeof Number(operations[i]) === "number") {
               console.log("In Number")
                result.push(Number(operations[i]))
            } else if( operations[i] === "+") {
            console.log("In +")
                let element = result[result.length - 1] + result[result.length - 2]
                result.push(element)
            } else if (operations[i] === "C") {
                  console.log("In C")
                result.pop()
            } else if(operations[i] === "D") {
                  console.log("In D", result[result.length - 1])
                let element = result[result.length - 1] * 2
                result.push(element)
            }
            console.log("Result", result)
        }

        const sum= result.reduce((accu,num) => {
            return accu + num
        },0)
        return sum
    }
}
