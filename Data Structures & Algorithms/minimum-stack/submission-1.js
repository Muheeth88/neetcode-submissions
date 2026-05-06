class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)
        if( this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val)
        }
        return 
    }


    pop() {
        let popped = this.stack.pop()
        if (popped === this.getMin()) {
            this.minStack.pop()
        }
        return
    }


    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
