class Solution {
    largestGoodInteger(num) {
     let maxGood = "";

    for (let i = 0; i <= num.length - 3; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            const candidate = num.slice(i, i + 3);
            if (candidate > maxGood) {
                maxGood = candidate;
            }
        }
    }

    return maxGood;
    }
}
