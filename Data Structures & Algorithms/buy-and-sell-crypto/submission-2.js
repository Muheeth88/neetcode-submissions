class Solution {

    maxProfit(prices) {
    let cheapestPrice = Infinity
    let maxProfit = 0
    for(let i =0; i< prices.length;i++) {
        if(prices[i] < cheapestPrice) {
            cheapestPrice = prices[i]
        }

        if(prices[i] - cheapestPrice > maxProfit) {
            maxProfit = prices[i] - cheapestPrice
        }
    }
    return maxProfit
    }
}
