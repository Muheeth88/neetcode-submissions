class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()

        this.left = new Node(0,0);
        this.right = new Node(0,0)

        this.left.next = this.right
        this.right.prev = this.left
    }

    remove(node) {
        let prev = node.prev
        let next = node.next

        prev.next = next
        next.prev = prev
    }

    insert(node) {
        let next = this.left.next

        this.left.next = node
        node.prev = this.left
        
        node.next = next
        next.prev = node
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        let node = this.cache.get(key)

        this.remove(node)
        this.insert(node)

        return node.value

    }

    put(key, value) {

        if(this.cache.has(key)) {
            let node = this.cache.get(key)
            this.remove(node)
        }

        let node = new Node(key, value)

        this.insert(node)
        this.cache.set(key, node)

 
        if(this.cache.size > this.capacity) {
            let lru = this.right.prev
            this.remove(lru)
            this.cache.delete(lru.key)
        }

    }
}
