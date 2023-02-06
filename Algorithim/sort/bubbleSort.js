

const bubbleSort = (array=[]) => {
    let isSwaped
    do {
        isSwaped = false
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] > array[i + 1]) {

                [array[i+1], array[i]] = [array[i], array[i+1]]
                isSwaped = true
            } 
        }

    }while(isSwaped)

    return array
}

console.log(bubbleSort([9,2,3,1,10,0,-1,-2]))