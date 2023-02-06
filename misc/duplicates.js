

const duplicate = (arr= []) => {
    
    const set = new Set()
    let duplicateElements = new Set()

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (set.has(element)) {
            duplicateElements.add(element)
        } else {
            set.add(element)
        }
    }

    return duplicateElements = [...duplicateElements]

}

console.log(duplicate([2, 4, 1, 8, 2, 0, 2, 2, 1, 0]))