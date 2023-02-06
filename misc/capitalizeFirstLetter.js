

const capitalizeFirstLeter = (input = '') => {
    input += ' '
    let words = ''
    let word = ''
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (letter === ' ') {
            words += word + ' '
            word = ''
        } else {
            if (word.length === 0) {
                letter = letter.toUpperCase()
            }

            word += letter
        }
        
        
        

        
    }
    return words
}



console.log(capitalizeFirstLeter("how are you doing today?"))