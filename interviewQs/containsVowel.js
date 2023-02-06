

const containsVowel = (str = '') => {
    const vowels = ['a', 'e', 'o', 'i', 'u']
    const set = new Set(Array.from(str.toLocaleLowerCase()))
    let counter = 0

    while (counter < vowels.length) {
        if (set.has(vowels[counter])) {
            return true
        }

        counter++
    }

    return false
    
}

const isVowel = containsVowel()

console.log(isVowel)