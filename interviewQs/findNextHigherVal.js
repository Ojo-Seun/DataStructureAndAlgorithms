


const findNextHigherVal = (arr = []) => {
    const obj = {}
    
    for (let i = 0; i < arr.length; i++) {

        obj[arr[i]] = null
        for (let j = i+1; j < arr.length; j++) {

            
            if (arr[j] > arr[i]) {
                obj[arr[i]] = arr[j]
                break
            }
            
        }



        
    }

    return obj
}

const obj = findNextHigherVal([11,0,10,5,2,7,9])
console.log(obj)