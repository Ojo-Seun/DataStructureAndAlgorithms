

class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prePend(value) {
        const node = new Node(value)
        
        if (!this.isEmpty()) {
            node.next = this.head
        } 
        this.head = node

        this.size++

    }

    insert(value, index) {
        if (index < 0 || index >= this.size) return ""
        if (index === 0) {
            this.prePend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    search(value){
        if(this.isEmpty()) return -1

        let curr = this.head
        let index = 0
        while(curr){
            if(curr.value === value){
                
                return index
            }

            index++
            curr = curr.next
        }

        return -1
    }

    remove(index){
        if(index < 0 || index >= this.size) return null

        let removedValue = null
        if(index === 0){
             removedValue = this.head
            this.head = this.head.next
        }else{
           let prev = this.head
            for (let i = 0; i < index -1; i++) {

                prev = prev.next
                
            }
            removedValue = prev.next
            prev.next = removedValue.next
        }
            this.size--
            return removedValue.value
    }


    removeValue(value) {

        if (this.isEmpty()) return null
       
        if (value === this.head.value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next.value !== value && prev.next) {
                prev = prev.next
            }

            if (prev.next) {
                const isRemoved = prev.next
                prev.next = isRemoved.next
                this.size--
                return value
            }

           return null
        }

    }

    removeMoreThanOneValues(value){
        if(this.isEmpty()) return null

        while(this.head.value === value){
            this.head = this.head.next
            this.size--
        }

        let prev = this.head
        while(prev.next){
            if(prev.next.value === value){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
            }else{
                 
                prev = prev.next
            }

        }


        return this.head

    }

    removeAlternate() {
        if (this.isEmpty()) return null

        let prev = this.head
        let counter = 1
        while (prev.next) {

            if (counter & 1) {
                const removedNode = prev.next
                prev.next = removedNode.next
            } else {
                prev = prev.next
            }
            counter++
            
        }

    }

    removeAll(value){
        let dummy = new Node(-1)
        dummy.next = this.head
        let prev = dummy
        let current = this.head

        while(current){
            if(current.value === value){
                prev.next = current.next
                current = current.next
            }else{
                prev = current
                current = current.next
            }

        }

        return dummy.next
    }

    reverseList(){
        let prev = null
        let current = this.head

        while(current){
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            
        } else {
            let prev = this.head

            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }

        this.size++
    }

    get getFirst() {
        return this.head.value
    }

    get getLast() {
        let node = this.head
        while (node.next) {
            node = node.next
        }

        return node.value
    }


    print(){
        if(this.isEmpty())return null
        let current = this.head
        let str = ''
        while(current){
            str += current.value + ' '
            current = current.next
        }
        return str
    }
}

 const list = new LinkList()
 list.prePend(20)
 list.prePend(15)
 list.prePend(10)
console.log(list.head)
list.reverseList()
console.log(list.head)
 

