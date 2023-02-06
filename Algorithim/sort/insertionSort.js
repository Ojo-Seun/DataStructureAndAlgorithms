


const insertionSort = (arr = []) => {
    
for (let i = 1; i < arr.length; i++) {
    const numToInsert = arr[i];
    let sortedArrIndex = i - 1
    
    while (sortedArrIndex >= 0 && arr[sortedArrIndex] > numToInsert) {

        arr[sortedArrIndex + 1] = arr[sortedArrIndex]
        sortedArrIndex--
    }
    arr[sortedArrIndex + 1] = numToInsert
    
}


    return arr
}

const sortedArr = insertionSort([5,100,10,90,70])
console.log(sortedArr)

const insertionSortDes = (arr = []) => {

    
for (let i = 1; i < arr.length; i++) {
    const numToInsert = arr[i];
    let sortedArrIndex = i - 1
    
    while (sortedArrIndex >= 0 && arr[sortedArrIndex] < numToInsert) {

        arr[sortedArrIndex + 1] = arr[sortedArrIndex]
        sortedArrIndex--
    }
    arr[sortedArrIndex + 1] = numToInsert
    
}


    return arr
    
}

const sortedArrDes = insertionSortDes([90, 10, 80, 30, 60, 40, 70, 50])
console.log(sortedArrDes)