

const returnLongestWord = (input = '') => {
    const arr = input.split(' ')
    //console.log(arr.reduce((prev,current)=> current.length > prev.length ? current : prev))
    let maxLen = 0
    let longestWord = ''
    const len = arr.length
    for (let i = 0; i < len; i++){
        const eleLength = arr[i].length

        if (eleLength > maxLen) {
            maxLen = eleLength
            longestWord = arr[i]
        }

        
    }

    return longestWord

}



console.log(returnLongestWord('some one is  you'))