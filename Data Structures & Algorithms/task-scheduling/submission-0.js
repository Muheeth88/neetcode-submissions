class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freqMap = {};

        for (let task of tasks) {
            freqMap[task] = (freqMap[task] || 0) + 1;
        }

        let heap = new MyMaxHeap();

        for (let count of Object.values(freqMap)) {
            heap.insert(count);
        }

        let time = 0;

        while(heap.size > 0) {
            let temp = [];
            let cycle = n + 1
            let workdone = 0

            while(cycle > 0 && heap.size > 0) {
                let freq = heap.extractMax();
                freq--
                workdone++

                if(freq > 0) {
                   temp.push(freq);
                }

                cycle--
            }
            for (let freq of temp) {
                heap.insert(freq)
            }

            if(heap.size === 0) {
                time = time + workdone
            } else {
                time = time + n + 1
            }
        }

        return time
    }
}

class MyMaxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);

        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let max = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {

            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return max;
    }
}


