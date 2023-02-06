const crypto = require('crypto')

class HashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size = size
        this.capacity = 0
    }


    isFull() {
        return this.capacity === this.size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
            
        }

        return (total % this.size)
    }

    set(key, value) {
        if (this.isFull()) {
            console.log("Space Is Full")
            return
        } 
        
            
        const index = this.hash(key)
        if (this.table[index] === undefined) {
            this.table[index] = value
            this.capacity++
            return true
        }

        
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]  || null
        
    }

    delete(key) {
        const index = this.hash(key)
        const value = this.table[index]
        this.table[index] = undefined
        return value
        
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            const value = this.table[i]
            if (value !== undefined) {
                console.log(`${i}, ${value}`)
            }
            
        }
    }

}

const table = new HashTable(10)
table.set("name", "Seun")
console.log(table.set("age", "20"))
table.print()