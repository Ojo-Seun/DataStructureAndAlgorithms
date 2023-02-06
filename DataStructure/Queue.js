

class Queue {
    constructor() {
        this.items = []

    }

    enqueue(item) {
        this.items.push(item)
    }


    dequeue() {
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek() {
        return this.items[0] ? this.items[0] : null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log((this.items).toString())
    }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(10)
queue.print()

console.log(queue.peek())

