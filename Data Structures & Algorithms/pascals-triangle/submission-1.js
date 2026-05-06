class Solution {
    generate(numRows) {
        let triangle = []
        for (let i = 0; i < numRows; i++) {
            let row = new Array(i + 1).fill(1);
            let  prevRow = triangle[i - 1]
            for (let j = 1; j < i; j++ ) {
                row[j] = prevRow[j - 1] +  prevRow[j]
            }
            triangle.push(row)
        }

        return triangle
    }

}
