class Solution {
    maxArea(heights) {
        let maxVol = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let distance = right - left;

            let height = Math.min(heights[right], heights[left]);

            let vol = distance * height;

            maxVol = Math.max(maxVol, vol);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--
            }
        }

        return maxVol;
    }
}
