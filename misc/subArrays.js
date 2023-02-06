

const subArray = (arr = [], n=0) => {
    let tempArr = []
    let arrOfArr = []
    let len = arr.length - 1

    while (arr.length) {

        tempArr.push(arr.shift())


        if (tempArr.length === n || arr.length === 0) {
            arrOfArr.push(tempArr)
            tempArr = []
        } 
        
    }


    return arrOfArr
    
}


console.log(subArray([1,2,5,5,8,0,6,9],3))


const chuncks = (arr = [], n) => { 
    let arrOfArr = []
    let chunck = []
    let len = arr.length

    for (let i = 0; i < len; i++) {
        const elem = arr[i]

        chunck.push(elem)

        if (chunck.length === n || i === len - 1) {
            arrOfArr.push(chunck)
            chunck = []
        }


    }

       return  arrOfArr

}

console.log(chuncks([1, 2, 5, 5, 8, 0, 6, 9], 3));