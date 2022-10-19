/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let freq= new Map();
    for(const char of s){
        let count= (freq.get(char) || 0)+1;
        freq.set(char,count);
    }
    for(const char of t){
        if(freq.has(char)){
            let count=freq.get(char)-1;
            if(count<0){
                return false;
            }
            freq.set(char,count);
        }else{
            return false;
        }
    }
    return true;
};