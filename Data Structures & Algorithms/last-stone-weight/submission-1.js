class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (!stones.length) return 0;
        let heap = new MyMaxHeap();
        for (let stone of stones) {
            heap.insert(stone);
        }

        while (heap.size > 1) {
            let x = heap.extractMax();
            let y = heap.extractMax();

            if (x !== y) {
                let z = Math.abs(x - y);
                heap.insert(z);
            }
        }

        return heap.peek() || 0;
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

            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

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

            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }

            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}
