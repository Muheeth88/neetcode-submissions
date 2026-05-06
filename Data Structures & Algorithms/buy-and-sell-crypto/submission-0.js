class Solution {
    maxProfit(prices) {
        let min = Infinity
        let maxProfit = 0
        for(let price of prices) {
            if(price < min) min = price
            const profit = price - min
            if(profit > maxProfit) maxProfit = profit
        }

        return maxProfit
    }
}
