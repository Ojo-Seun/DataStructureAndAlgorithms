'use-scrit'

const isEven = (n) => {
    if(n === '' || isNaN(n))return "Enter A Valid Number"
     if(n <= 0)return false
    return (n & 1) === 0
}


module.exports = isEven