

const set = new Set([1,4,4, 2, 1,3])
set.add(6)
console.log(set.delete(4))
console.log(set.add('e'))
console.log(set.size)
console.log(set.values())
console.log(set.keys())
console.log(set.entries())


class MySet extends Set {

    constructor() {
        super()
    }
}


