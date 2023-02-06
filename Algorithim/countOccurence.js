



const countOccurence = (array = []) => {
    let result = {}
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (result.hasOwnProperty(element)) {
           
            const count = result[element] + 1
            result[element] = count 
                
            
        } else {
            result[element] = 1
        }

        
        
    }

    return result

}

module.exports = countOccurence
