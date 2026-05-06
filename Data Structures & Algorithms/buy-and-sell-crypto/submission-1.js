class Solution {
    maxProfit(prices) {
        let min = Infinity
        let maxProfit = 0
        for(let i = 0; i < prices.length; i++) {
            if (prices[i] < min) min = prices[i]
            const profit = prices[i] - min
            if(profit > maxProfit) {
                maxProfit = profit
            }
        }

        return maxProfit
    }
}
