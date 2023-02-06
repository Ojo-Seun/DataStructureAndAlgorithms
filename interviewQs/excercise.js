
const readLine = require('readline')

const inputs = readLine.createInterface({ input: process.stdin, output: process.stdout })

let sum = 0
inputs.on("line", (line) => {
    if (line === " ") {
        console.log(sum)
        inputs.close()
    }
    sum += parseInt(line)
})