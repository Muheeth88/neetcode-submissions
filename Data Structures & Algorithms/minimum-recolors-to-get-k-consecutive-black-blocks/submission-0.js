class Solution {
    minimumRecolors(blocks, k) {
        let min = k
        
        for(let i = 0; i< blocks.length; i++) {
            if( i + k <= blocks.length){
                let count = 0
                let itr = 0
                while (itr < k) {
                    if(blocks[i + itr] === "W") {
                        count++
                    }
                    itr++
                }
                if(count < min) {
                    min = count
                }
            }
        }
        return min
    }
}
