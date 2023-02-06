


const findComm = (str1 = "", str2 = "") => {
    let comm = ''
    const map = new Map()

    for (let i = 0; i < str1.length; i++) {



       
       }
            


        
    

    return map

}



const longestSubstr = (s = '')=>{
    let substr = ''
    let longetsubstr = ''
    let set = new Set()
    let begin = 0
    let max = 0
    for (let i = 0; i < s.length; i++) {
        start = i
        while (set.has(s[i])) {
            set.delete(s[begin])
            begin++
            
        }

        set.add(s[i])
        max = Math.max(max, i - begin + 1)
        substr = s.slice(i - max, i)
    }

    return substr
    

}

console.log(longestSubstr("abcabcbb"));


