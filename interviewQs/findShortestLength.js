


const findMinLengthOfSubArrayWithParentDegreeOfArray = (arr = []) => {
    let parentDegree = 0, childDegree = 0, minChildLength = Infinity
    let child, childStartIndex, childLastIndex
    const childrenRange = new Map()

    for (let i = 0; i < arr.length; i++){
        const elem = arr[i]

        if (childrenRange.has(elem)) {
            child = childrenRange.get(elem)
            childStartIndex = child[0]
            childLastIndex = i
            childDegree = child[2] + 1
            childrenRange.set(elem, [childStartIndex, childLastIndex, childDegree])
            
            if (childDegree > parentDegree) {
                parentDegree = childDegree
            }

        } else {
            
            childrenRange.set(elem,[i,i,1])
        }

    }


    for (const [key, [start, last, degree]] of childrenRange) {
        const childLength = (last - start) + 1
        if (degree === parentDegree && childLength < minChildLength) {
            minChildLength = childLength
        }
        
    }

    return { minChildLength, childrenRange }
}

console.log(findMinLengthOfSubArrayWithParentDegreeOfArray([1,2,1,2,2,1,0,0]))