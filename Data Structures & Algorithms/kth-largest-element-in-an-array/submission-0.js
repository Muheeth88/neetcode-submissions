class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap = new MyMinHeap()

        for (let num of nums) {
            heap.insert(num)
            if(heap.size > k) {
                heap.extractMin()
            }
        }

        return heap.peek()
    }
}

class MyMinHeap {
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

            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.sinkDown();

        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (
                leftChild < length &&
                this.heap[leftChild] < this.heap[smallest]
            ) {
                smallest = leftChild;
            }

            if (
                rightChild < length &&
                this.heap[rightChild] < this.heap[smallest]
            ) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}
