

// const findMaxNsubArr = (arr: number[], n: number) => {
//     if(arr.length < n)return 0
//     let maxSum: number = 0
//     for (let i = 0; i < n; i++) {
//         const element = arr[i];
//         maxSum += element
        
//     }


//     for (let j = n; j < arr.length; j++) {
//         const numToDeduct = arr[j - n]

//         const newSum = (maxSum - numToDeduct) + arr[j]
//         if (newSum > maxSum) {
//             maxSum = newSum
//         }
        
//     }

//     return maxSum
// }

// //console.log(findMaxNsubArr([2,1,5,6],5))

// export const printArr = <T>(arr: T[] = [], start:number, end: number = arr.length) => {
//   let newArr: T[] = []
  
//   for (let i = start; i < end; i++) {
//     const element = arr[i];
//     newArr.push(element)
    
//   }

//   return newArr
  
// }
// //console.log([3, 1, 4].slice( 0, 0))

// const printSubArr = (arr: number[] = []) => {
//   let subArrays: any[]  = []
//   let temp:number[]
//   for (let i = 0; i < arr.length; i++) {
//     temp = printArr(arr,i)
//         subArrays = [...subArrays, temp]
    
//   }

//   return subArrays
// }
// // console.log(printSubArr([1,2,3,4]))

// export const findAllSubEqaulN = (arr:number[],N:number) => {
//   let n = arr.length;
//   const leftArrProduct:number[] = [];
//   const rightArrProduct:number[] = [];
//   let leftProduct = 0;
//   let rightProduct = 0;

//   for (let i = 0; i < n; i++) {
//     leftArrProduct[i] = leftProduct;
//     leftProduct += arr[i];
//   }

//   for (let i = n - 1; i >= 0; i--) {
//     rightArrProduct[i] = rightProduct;
//     rightProduct += arr[i];
//   }

//   for (let i = 0; i < n; i++) {
//     arr[i] = leftArrProduct[i] + rightArrProduct[i];
//   }

//   console.log(arr);
// };

// //findAllSubEqaulN([1, 2, 3, 4],4);


// const findSumNterm = (n:number)=>{
//   let terms:number[] = [0]

//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     terms[i] = i
//     sum += i
    
//   }

// return {terms,sum}
// }

// //console.log(findSumNterm(8))


// function findSumSubArrEqualN(arr:number[],sum:number){
//   let leftPointer = 0
//   let rightPointer = 0
//   let subArrays:any[] = []
//   let tempSum = 0

//   for (let i = rightPointer; i < arr.length; i++) {
         
//           tempSum += arr[rightPointer]

          
//           if(tempSum > sum && leftPointer <= rightPointer) {
//             tempSum -=arr[leftPointer]
//             leftPointer++
            
//           }
//           if(tempSum === sum){
            
//             subArrays.push([leftPointer,rightPointer])
//           }
//           rightPointer++
    
    
//   }

//   // if(leftPointer === rightPointer){
//   //   subArrays.push(arr[leftPointer])
//   // }else{

//   //   subArrays = arr.slice(leftPointer, rightPointer)
//   // }
// return subArrays

// }


// //console.log(findSumSubArrEqualN([4,2,5,1],5))






const longestSubstrWithoutReapetingCha = (s) => {
  if(s.length < 2)return s.length

  let leftPointer = 0
  let longestLen = 0
  let obj = {}
  
  
    for (let end = 0; end < s.length; end++) {
      
      if (obj[s[end]] !== undefined && obj[s[end]] >= leftPointer) {
        leftPointer = obj[s[end]] + 1
      }

      obj[s[end]] = end
      longestLen = Math.max(longestLen, end - leftPointer + 1)
      
    }

  return longestLen
}


//console.log(longestSubstrWithoutReapetingCha("abcabcbb"));

const mostOccuredChar = (s = '') => {
  let obj = {}
  let max = 0
  let mostElem = ""
  


  
    for (let i = 0; i < s.length; i++) {
      const element = s[i];

      if(/[a-zA-Z]/.test(element)){

        if (obj[element] !== undefined) {
          obj[element] = obj[element] + 1
        } else {
          obj[element] = 1
        }
        if (obj[element] > max) {
          max = obj[element]
          mostElem = element
        }
      }
        
      
  }
  
  return { mostElem, max }
}
const obj = mostOccuredChar("WEREoop00988888889WW       ")
console.log(obj)