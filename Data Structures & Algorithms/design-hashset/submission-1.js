class MyHashSet {
    constructor() {
        this.SIZE = 769
        this.buckets = Array.from({length: this.SIZE}, () => [])
    }

    hash(key) {
        return key % this.SIZE
    }

    add(key) {
        const index = this.hash(key)
        const bucket  = this.buckets[index]
        for(let val of bucket) {
            if(val === key) {
                return
            }
        }
        bucket.push(key)
    }

    remove(key) {
        const index = this.hash(key)
        const bucket  = this.buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i] === key) {
                bucket.splice(i, 1)
                return
            }
        }
    }

    contains(key) {
        const index = this.hash(key)
        const bucket  = this.buckets[index]
        for (let val of bucket) {
            if (val === key) return true;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
