class Solution {
    partition(s) {
        if (s.length === 0) return [];
        const result = [];

        function isPalindrome(left, right) {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        }

        function backtrack(start, path) {
            if (start === s.length) {
                result.push([...path]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                if (isPalindrome(start, end)) {
                    let substr = s.slice(start, end + 1);
                    path.push(substr);
                    backtrack(end + 1, path);
                    path.pop();
                }
            }
        }

        backtrack(0, []);
        return result;
    }
}
