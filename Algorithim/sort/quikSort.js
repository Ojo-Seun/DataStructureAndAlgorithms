
const quikSort = (arr = []) => {

    if (arr.length < 2) return arr

    let leftArr = []
    let rightArr = []
    const pivotVal = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        if (pivotVal < element) {
            leftArr.push(element)
        } else {
            rightArr.push(element)
        }
        
    }


    return [...quikSort(leftArr), pivotVal, ...quikSort(rightArr)]
}

const sortedArr = quikSort([90, 5, 100, 10, 15, 80, 70])
console.log(sortedArr)