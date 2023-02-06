

const obj = {
    name: "Rolo",
    age: 20,

    details() {
        
        return this.name + ' ' + this.age
    }
}

console.log(delete obj.age)
console.log(obj)

const obj1 = {
    name: 'Yoporo',
    age: 30,
    
    // get d() {
    //     return this.name + ' '+ this.age
    // }

}


// const obj2 = obj1
// obj2.age = 1
// console.log(obj1, obj2)

// Object.freeze(obj)
// obj.age = 12
// obj.height = "2m"
// //Object.assign(obj1,obj)
// const details = obj.details.bind(obj1)

// obj.details()

// console.log(obj?.height)
// console.log(obj1.d)
// const c = obj.details.call(obj1)
// const b = obj.details.bind(obj1)
// console.log(c)
// console.log(b())