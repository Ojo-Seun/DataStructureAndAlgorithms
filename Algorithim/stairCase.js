

const stairCaseClimp = (n) => {
    const stepWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        stepWays[i] = stepWays[i - 1] + stepWays[i - 2]
        
    }

    return stepWays[n - 1]
}


console.log(stairCaseClimp(2))