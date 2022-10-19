/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let freq= {};
    for(const char of s){
        freq[char]=(freq[char]||0)+1;
    }
    for(const char of t){
        if(freq[char]){
            freq[char]=freq[char]-1;
            if(freq[char]<0){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
};