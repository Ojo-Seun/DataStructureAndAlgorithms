

const printChestBox = (n) => {
    const oddLine = " # # # #"
    const evenline = "# # # # "
    
    for (let i = 1; i <= n; i++) {

        if (i % 2 !== 0) {
            console.log(oddLine)
        } else {
            console.log(evenline)
        }
        
    }
}

printChestBox(8)