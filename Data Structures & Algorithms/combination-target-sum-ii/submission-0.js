class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates.sort((a, b) => a - b);

        function backtrack(start, remaining, combination) {
            if (remaining < 0) {
                return;
            }

            if (remaining === 0) {
                result.push([...combination]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                combination.push(candidates[i]);
                backtrack(i + 1, remaining - candidates[i], combination);
                combination.pop(candidates[i]);
            }
        }

        backtrack(0, target, []);

        return result;
    }
}
