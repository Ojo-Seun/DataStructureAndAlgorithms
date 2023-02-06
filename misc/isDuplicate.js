


const isDuplicate = (arr = []) => {


    let tempArr = new Set()

    for (let i = 0; i < arr.length; i++) {
        if (tempArr.has(arr[i])) {
            return true
        } else {
            tempArr.add(arr[i])
        }
        
    }

    return false
}

const duplicate = (arr = []) => {
    return (new Set(arr).size !== arr.length) 
}
module.exports = isDuplicate


console.log(isDuplicate([1,1,0,0,0]))
console.log(duplicate([1,1,0,0]))