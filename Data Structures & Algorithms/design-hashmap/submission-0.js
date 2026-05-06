class MyHashMap {
    constructor() {
        this.SIZE = 769
        this.buckets = Array.from({length: this.SIZE}, () => [])
    }

    hash(key) {
        return key % this.SIZE
    }


    put(key, value) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        for (let pair of bucket) {
            if(pair[0] === key) {
                pair[1] = value
                return
            }
        }

        bucket.push([key, value])
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        for (let pair of bucket) {
            if(pair[0] === key) {
                return pair[1]
            }
        }
        return -1
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

           for (let pair of bucket) {
            if(pair[0] === key) {
              bucket.splice(pair, 1);
              return
            }
        }
    
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
