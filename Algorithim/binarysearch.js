

const binarySearch = (arr = [], target) => {
    let leaftIndex = 0
    let rightIndex = arr.length - 1
    let middleIndex
    
    while (leaftIndex <= rightIndex) {
         middleIndex = Math.floor((rightIndex + leaftIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }

        if (target > arr[middleIndex]) {
            leaftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    return -1
}

console.log(binarySearch([1,2,4,8], 4))

const binaryStringSearch = (arr = [], target="") => {

    let leaftIndex = 0
    let rightIndex = arr.length - 1
    let middleIndex
    let targetInt
    let elementInt
    
    while (leaftIndex <= rightIndex) {
        middleIndex = Math.floor((rightIndex + leaftIndex) / 2)
        targetInt = target.charCodeAt(0)
        elementInt = arr[middleIndex].charCodeAt(0)
        if (targetInt === elementInt) {
            return middleIndex
        }

        if (targetInt > elementInt) {
            leaftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    return -1
}
    
//console.log(binaryStringSearch("ABCD",'D'))