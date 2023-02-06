



function subarraySum(arr, n) {
  let sum = 0;
  let start = 0;
  let end = 0;
  let res = [];
  while (end < arr.length) {
    sum += arr[end];
    while (sum > n && start <= end) {
      sum -= arr[start];
      start++;
    }
    if (sum === n) {
      res.push([start, end]);
    }
    end++;
  }
  return res;
}
console.log(subarraySum([3,2,5,1],5))