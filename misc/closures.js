

const closures = (() => {
    let counter = 0
    return (increament)=> (counter += increament)
})()


closures(5)
console.log(closures(20))