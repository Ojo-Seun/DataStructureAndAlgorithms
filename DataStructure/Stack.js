

class Stack{
    constructor() {
        this.items = []
    }

    push(item) {
        if (typeof item === 'number') {
            
            this.items.push(item)
            return this.items.length
        }
        return "Invalid Input"
    }

    pop() {
        return this.items.pop() || null
    }

    peek() {
        return this.items[this.items.length - 1] || null
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    get print() {
        console.log(this.items)
    }
}

const stack = new Stack()


// console.log(stack.push(1))
// console.log(stack.push(9))
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.size())
// console.log(stack.pop())
console.log(stack.push())
console.log(stack.push(90))
stack.print
console.log(stack.push(""))