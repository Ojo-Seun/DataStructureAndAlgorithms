
let arr = ["A", "B", "C", "O"];
let newArr = [];

function removeElement(element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            newArr.push(arr[i]);
        }
    }
    console.log(arr, newArr);

}

const Pop = () => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (arr[arr.length - 1] !== element) {
            newArr = [...newArr, element]
        }
        
    }

   return arr = newArr

}

arr.unshift("P")
console.log(arr)

//module.exports = removeElement;