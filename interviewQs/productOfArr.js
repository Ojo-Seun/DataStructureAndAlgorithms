


// const multArr = (arr = []) => {
    
//     let productArr = new Array(arr.length)
//     productArr = productArr.fill(0)
//     const obj = {zeroCount:0, index:0, product:1}

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === 0) {
//             obj.zeroCount = obj.zeroCount + 1
//             obj.index = i
//         }

//         if (arr[i] !== 0) {
//             obj.product = obj.product * arr[i]
//         }
                
        
//     }

//     if (obj.zeroCount > 1) {
//         return productArr
//     } else if (obj.zeroCount === 1) {
//         productArr[obj.index] = obj.product
//     } else {
//         arr.forEach((x, index, array) => {
//             if(array.length < 2)return productArr = [0]
//             productArr[index] = obj.product/x
//         })
//     }


//     return productArr
    
// }


// console.log(multArr([5,2,0]))


const arrProductNotSelf = (arr=[])=>{
    let n = arr.length
    const products = []
    const leftArrProduct = []
    const rightArrProduct = []
    let leftProduct = 1
    let rightProduct = 1


    for (let i = 0; i < n; i++) {
        leftArrProduct[i] = leftProduct
        leftProduct*= arr[i]


        
        
    }


    for (let i = n -1; i >= 0; i--) {

        rightArrProduct[i] = rightProduct
        rightProduct *= arr[i]


        
    }

    for (let i = 0; i < n; i++) {
        
        products[i] = leftArrProduct[i] * rightArrProduct[i]
    }

    console.log(products)
}

arrProductNotSelf([1,2,3,4])