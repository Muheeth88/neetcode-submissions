class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let totalProfit = 0

        for (let i = 1; i < prices.length; i++) {
            if(prices[i] > prices[i-1]) {
                let profit = prices[i] - prices[i-1]
                totalProfit = totalProfit + profit 
            }
        }

        return totalProfit


    }
}
