class Solution {
    canConstruct(ransomNote, magazine) {
   const freq = {};

    // Count characters in magazine
    for (let ch of magazine) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Try to build ransomNote
    for (let ch of ransomNote) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
    }
}
