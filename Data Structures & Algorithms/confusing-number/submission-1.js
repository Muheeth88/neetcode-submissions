class Solution {
    confusingNumber(n) {
        const rotated = {
            0 : 0,
            1 : 1,
            6 : 9,
            8 : 8,
            9 : 6
        }

        let original = n.toString()
        let dummy = ""

        for (let i = original.length - 1; i >= 0; i--) {
            let current = original[i]
            if(!(current in rotated)) return false
            dummy = dummy + rotated[current]
        }

        if (dummy === original) return false
        return true
    }
}
