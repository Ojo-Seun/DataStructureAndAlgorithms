

let text = document.getElementById('text').textContent

//console.log(isEven(2))

function countWord() {
    let wordsCount = {}
    text = text.split(' ')
    text.forEach((x, index) => {
        x = x.replaceAll(/[.!?\n\r]/g,'')
        if (wordsCount[x]) {
            let count = wordsCount[x]
            wordsCount = {...wordsCount, [x]:count + 1}
        } else {
            wordsCount = {...wordsCount, [x]: 1}
        }
    })

    return wordsCount
}

const obj = {
    name:"Ojo",

     f:(name) => console.log(name),
        
    
    
    x() {
        return this.name
    }
}



class Class{

     age = 10

    constructor(name) {
     this.name = name
        
    }

    x=()=>{
     return this.age
    }

    f() {
        return this.age
    }
}

const namef = new Class("OJO")
console.log(namef.f())
const arr = [1]
const d = new Date
console.log( 9 + 2 *2/2 )
