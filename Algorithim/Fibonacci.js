



const tutorialFibonacci = (n) => {
    if(n <= 1)return n
    let fib = [0, 1]
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

const recursiveFibonacci = (n)=>{
    if(n <= 1)return n
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}


const fibonacci = tutorialFibonacci(6)
console.log(fibonacci)
console.log(recursiveFibonacci(6))