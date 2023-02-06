

const maxOccured =(arr = []) => {
    const set = new Set()
    let count = 0
    let max = 0
    let result = {}
    arr.forEach((x, index) => {
        if (set.has(x)) {
            count++
            if (count > max) {
                max = count
                result = {[x]:max}
            }
        } else {
            set.add(x)
            count = 1
            if(count >max)max = count
        }
    })

    return result
}

console.log(maxOccured([1,1,3,2,1,2,5,2,1,1,1,0,0,0,0,0,0,1]))