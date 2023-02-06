


function reverseAlpha(s = '') {
    let tempArr = []
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (/[a-zA-Z]/.test(element)) {
            tempArr.push(element)
            s[i] = null
        }

        
    }


    for (let j = 0; j < s.length; j++) {
        const element = s[j];
        if (element === null) {
            s[j] = tempArr.pop()
        }
        
    }

    return s.join('')
}




console.log(reverseAlpha("90paso0q"))