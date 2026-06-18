class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fives = 0
        let tens = 0

        for (let bill of bills) {
            if(bill === 5) {
                fives++
                continue
            }

            if(bill === 10) {
                if(!!fives) {
                    fives--
                    tens++
                    continue
                } else {
                    return false
                }
            }

            if(bill === 20) {
                     if(fives >= 3) {
                    fives = fives -3
                    continue
                }
                if(tens >= 1 && fives >= 1) {
                    tens--
                    fives--
                    continue
                }
           
                return false
            }

        }
        return true
    }
}
