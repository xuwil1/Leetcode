/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length){
        return [];
    }
    let temp= new Map();
    
    for(const word of strs){
        let hash=getHash(word);
        let values=temp.get(hash) || [];
        values.push(word);
        temp.set(hash, values);
    }
    
    return [...temp.values()].reverse();
};
function getHash(word){
    let freq= new Array(26).fill(0);
    for(const char of word){
        freq[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    return freq.map(x=>`#${x}`).join('');
}
