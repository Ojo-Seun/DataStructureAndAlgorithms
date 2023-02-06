

class Queue{
    constructor() {
        this.items = {}
        this.frontPointer = 0
        this.rearPointer = 0
        this.size = 0
    }

    enqueue(item) {
        this.items[this.rearPointer] = item
        this.size++
        this.rearPointer++
    }

    dequeue() {
        const item = this.items[this.frontPointer] || ''
        delete this.items[this.frontPointer]
        this.frontPointer++
        this.size--
        return item
    }

    isEmpty() {
        return (this.rearPointer - this.frontPointer) === 0
    }

    
}

const series = () => {
    
    const queue = new Queue
    
    const N = 3
    const p = 16
    
    
    queue.enqueue(N)
    let index = 0
    let result = []
    while (queue.size > 0) {
        index++
        const current = queue.dequeue()
        result = [...result, current]
        
        if (current === p) {
            console.log(index)
            return result
        }
    
        queue.enqueue(current + 1)
        queue.enqueue(current * 2)
    }
}

console.log(series())

const array = [2, 9, 4, 90, 5]


