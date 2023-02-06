// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

const secondLargest = (arr = []) => {
  let max = arr[0];
  let secondLargestEle = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > max) {
      secondLargestEle = max;
      max = element;
    } else if (element > secondLargestEle && element < max) {
      secondLargestEle = element;
    }
  }

  return [secondLargestEle, max];
};
console.log(secondLargest([10, 9, 7, 0, 3]));
