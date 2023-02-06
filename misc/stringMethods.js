


const str = "How Are You Are?"

// Methods for extracting part of a string
// console.log(str.slice(0, 3)) // Extract part of string and can take -ve value
// console.log(str.substring(0, 5)) // Sane as slice() but can not take -ve value
// console.log(str.substr(0, 2)) // Same as substring but second parameter is length of the string


// Methods for extracting individual char in from the string
console.log(str.charAt(4))
console.log(str.at(-1))
console.log(str.codePointAt(20))
console.log(str[20])
console.log(str.charCodeAt(4))



// Methods to search for subStrings in a string
console.log(str.includes("How", 0)) // Returns a boolean, the second argument indicate where to start the search

console.log(str.search(/Are/)) // Returns the position of first occurence if not occur returns -1
console.log(str.indexOf("Are", 5)) // Same as search but cannot take regEx as argument and can take position as second argument.

console.log(str.match(/Are/)[0]) //Return an array containing subString || null
console.log(str.matchAll(/Are/g))// Returns iteratable object

console.log(str.repeat(2))

console.log(str.replace(/Are/, 'is'))// Replace and return the first match
console.log(str.replaceAll(/are/ig, "yes"))

console.log(str.split(' '))// convert string to an array

