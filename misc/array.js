let arr = [6, 9, 0, 2,50, 60, 5,5,5];
let arr2 = ['a', 'e', 'c', 'y'];
let arr3 = new Array(10);


class customArray {


    constructor(array) {
      this.maxNum = Number.MAX_VALUE
        this.array = array
        this.set = new Set()
        this.counter = 0
    }

    
    addElement = (element) => {

        // if (this.set[0] === undefined) {
        //     return this.set[0] = element
        // }
        // for (let i = 0; i < this.length(this.set); i++){

        //     if (!this.set.includes(element)) {
        //          this.set = [...this.set, element]
        //     }

        // }

        return this.set.add(element)

    }

    countWithoutRepeatation = () => {
        for (let i = 0; i < this.length(this.array); i++) {
            const element = this.array[i]

            this.set.add(element)
        }

        return this.set.size
    }

    length = (array = this.array) => {
        for (let i = 0; i < this.maxNum; i++){
            if (array[i] === undefined) {
                return i
            }
        }
    }



}

const array = new customArray(arr)
console.log(array.length())
console.log(array.countWithoutRepeatation())



//console.log(arr.pop()) === Delete the last element of the array and return it.

//console.log(arr.push(20), arr) === Add element to the end of the array and return the new length

//console.log(arr.shift()) === Delete an element from the beginning of the array and return it.

//console.log(arr.unshift(90)) === Add element to the beginning of the array and return the new length

//console.log(arr.reverse()) === reverse the order of the array

//console.log(arr.concat(arr2)) === join two or more arrays together.

//console.log(arr.slice(1, 3)) //=== extract part of the array

//console.log(arr2.sort()) === sort an array.

// console.log(arr)
// console.log(arr.splice(0, 3, 20, 5, 10));
// console.log(arr)

//console.log(arr.find(x => x == 0))

//console.log(arr2.join('|')) //=== convert an array to a string with specifield separator.

//console.log(arr.toString())


//console.log(arr3.fill(20, 0) === fill array with specifield value

//console.log(arr.reduce((y, x) => y + x))

//console.log(arr.map(x => x + x));

//console.log(arr.filter(x => x !== y), arr)