

const removeDuplicate = (arr = []) => {
           return    [...new Set(arr)]
}


console.log(removeDuplicate([1,1,2,2,5,4,2,1,]))