/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left=0;
    let right=s.length-1;
    s=s.toLowerCase();
    while(left<right){
        while(left<right && !check(s[left])) left++;                 
        while(left<right && !check(s[right])) right--;
        if(s[left]!==s[right]) return false;
        left++;
        right--;

    }
    return true;
};


function check(c){
    let code=c.charCodeAt(0);
    let alpha = code>='a'.charCodeAt(0) && code<='z'.charCodeAt(0);
    let num = code>='0'.charCodeAt(0) && code<='9'.charCodeAt(0);
    return alpha || num
}

    