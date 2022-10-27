/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left=0;
    let right=s.length-1;
    s=s.toLowerCase();
    console.log(s);
    while(left<right){
// if(!(s[left].charCodeAt(0)>='a'.charCodeAt(0) && s[left].charCodeAt(0)<='z'.charCodeAt(0)) || 
//     !(s[left].charCodeAt(0)>='0'.charCodeAt(0) && s[left].charCodeAt(0)<='9'.charCodeAt(0))){
    while(left<right && !check(s[left])){
            left++;                 
        }
// if((s[right].charCodeAt(0)>='a'.charCodeAt(0) && s[right].charCodeAt(0)<='z'.charCodeAt(0)) || 
//     (s[right].charCodeAt(0)>='0'.charCodeAt(0) && s[right].charCodeAt(0)<='9'.charCodeAt(0))){
        while(left<right && !check(s[right])){
            right--;                 
        }
        console.log(s[left]+' '+s[right]);
        if(s[left]==s[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    if(left==right){
        return true;
    }
    return true;
};


function check(c){
    let alpha = c.charCodeAt(0)>='a'.charCodeAt(0) && c.charCodeAt(0)<='z'.charCodeAt(0);
    let num = c.charCodeAt(0)>='0'.charCodeAt(0) &&c.charCodeAt(0)<='9'.charCodeAt(0);
    return alpha || num
}