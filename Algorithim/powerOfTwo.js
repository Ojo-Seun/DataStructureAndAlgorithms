
const isPowerOfTwo = (n) => {
        let isPower = false

    for (let i = 0; i < n; i++){
        if (2**i === n) {
            isPower = true
            
            break
        }
    }
   console.log(isPower)
}

const isPowerOfTwoBitwise = (n) => {
    if (n < 1) {
        return false
    }

    return (n & (n - 1)) === 0
}
console.log(isPowerOfTwoBitwise(128))