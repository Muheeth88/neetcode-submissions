class Solution {
    nextGreaterElement(nums1, nums2) {
        const result = []
        for(let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if(nums1[i] === nums2[j]) {
                    let k = j + 1
                    while(k < nums2.length) {
                        if(nums2[j] < nums2[k]) {
                            result.push(nums2[k])
                            break
                        }
                        k++
                    }
                    if(result.length - 1 < i) {
                    result.push(-1)
                    }
                }
            }
        }
        return result
    }
}
