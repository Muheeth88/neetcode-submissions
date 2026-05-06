class MyHashSet {
    constructor() {
        this.myset = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.myset.push(key)
        return null
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.myset = this.myset.filter((ele) => ele !== key)
        return null
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
       return this.myset.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
