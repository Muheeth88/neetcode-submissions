class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MyMaxHeap()

        for (let point of points) {
            let dist = this.getDistance(0, point[0], 0, point[1])

            heap.insert([dist, point])

            if(heap.size > k) {
                heap.extractMax()
            }
        }
        
        const result = []

        while (heap.size > 0) {
            result.push(heap.extractMax()[1])
        }

        return result
    }

    getDistance(x1, x2, y1, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }
}

class MyMaxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][0] >= this.heap[index][0]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.sinkDown();

        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;

            if (
                leftChild < length &&
                this.heap[leftChild][0] > this.heap[largest][0]
            ) {
                largest = leftChild;
            }

            if (
                rightChild < length &&
                this.heap[rightChild][0] > this.heap[largest][0]
            ) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}
