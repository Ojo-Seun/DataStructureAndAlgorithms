

const isPrime = (n) => {
    if (n < 2) {
        return false
    }

    const len = Math.sqrt(n)

    for (let i = 2; i <= len; i++){
        if (n % i === 0) {
            return false
        }

        
    }

    return true
    
}

console.log(isPrime(9))