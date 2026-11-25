




class Stack {
    stack = [];
    minStack = [];

    push(value) {
        this.stack.push(value);
        const currentMin = this.minStack[this.minStack.length - 1];
        if (!currentMin || value < currentMin) {
            this.minStack.push(value);
        };
    }

    pop() {
        const value = this.stack.pop();
        const currentMin = this.minStack[this.minStack.length - 1];
        if (value === currentMin) {
            this.minStack.pop();
        };
    }

    getMin() {
        return this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
}

const stack = new Stack();

stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2);



console.log(stack.getMin())
console.log(stack.top())