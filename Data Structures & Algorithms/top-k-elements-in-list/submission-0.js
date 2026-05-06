class Solution {
    topKFrequent(nums, k) {
          let obj = new Map()
  for (let x of nums) {
    if (obj.has(x)) {
      obj.set(x, obj.get(x) + 1)
    } else {
      obj.set(x,1)
    }
  }
  console.log(obj)
  return Array.from(obj).sort((a,b) => b[1] - a[1]).map(x => x[0]).splice(0,k)
    }
}
