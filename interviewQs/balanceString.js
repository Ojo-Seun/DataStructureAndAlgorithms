

const isBalance = ((str = '') => {
    if(str.length < 2)return false
    
    const openTags = []
    let peek
    let tag = ''
    const len = str.length

    for (let i = 0; i < len; i++){
        tag = str[i]
        peek = openTags[openTags.length - 1]
        if (tag === '{' || tag === '[' || tag === '(' || tag === '<') {

            openTags.push(tag)
            
        } else if ((openTags.length !== 0) && ((peek === '{' && tag === '}') || (peek === '(' && tag === ')') || (peek === '[' && tag === ']') || (peek === '<' && tag === '>'))) {
            openTags.pop()

        }

        
    }

    return openTags.length === 0


})('{((<>))}')


console.log(isBalance)


