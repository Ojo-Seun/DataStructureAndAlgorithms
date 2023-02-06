
class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class DoubleLinkList{
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }

    isEmpty() {
        return this.size === 0
    }

    prePend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.size++

    }


    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.size++

    }

    removeFromFront() {
        if (this.isEmpty()) return null
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd() {
        if (this.isEmpty()) return null
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
                
        }

        this.size--
        return value
    }

    print() {
        const values = []
        let prev = this.head
        while (prev) {
            values.push(prev.value)
            prev = prev.next
        }

        console.log(values)
    }

}

const doubleList = new DoubleLinkList()
doubleList.prePend(2)
doubleList.prePend(4)
doubleList.append(8)
doubleList.append(10)
doubleList.removeFromEnd()

doubleList.print()