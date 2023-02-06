

const merge = (leftArr = [], rightArr = []) => {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
    

}

const sorted = merge([2,9,1], [10,0,0])
console.log(sorted)
 
const concatArr = (arr1 = [], arr2=[]) => {
    const combineArr = [...arr1, ...arr2].sort((a, b) => a - b)
    console.log(combineArr)
}
