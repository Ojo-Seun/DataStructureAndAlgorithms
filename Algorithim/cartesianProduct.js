


const cartesianProduct = (arr1 = [], arr2 = []) => {
    const cartesianProductElements = []
    for (let i = 0; i < arr1.length; i++) {

        

        for (let j = 0; j < arr2.length; j++) {
            cartesianProductElements.push([arr1[i],arr2[j]])
            
        }
        
    }

    return cartesianProductElements
}

console.log(cartesianProduct([0,1,2],[3,4]))