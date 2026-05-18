class Solution {
    checkInclusion(s1, s2) {
        let s1map = new Map();
        let windowMap = new Map();

        let left = 0;

        const checkEqual = (map1, map2) => {
            for (let [key, value] of map1) {
                if (map2.get(key) !== value) {
                    return false;
                }
            }
            return true;
        };

        for (let char of s1) {
            s1map.set(char, (s1map.get(char) || 0) + 1);
        }

        for (let right = 0; right < s2.length; right++) {
            windowMap.set(s2[right], (windowMap.get(s2[right]) || 0) + 1);

            let winLength = right - left + 1;

            if (winLength > s1.length) {
                windowMap.set(s2[left], windowMap.get(s2[left]) - 1);

                if (windowMap.get(s2[left]) === 0) {
                    windowMap.delete(s2[left]);
                }

                left++;
            }

            if (checkEqual(s1map, windowMap)) {
                return true;
            }
        }

        return false;
    }
}
