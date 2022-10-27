/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if (!s.length) return true;
    s=s.toLowerCase();
    return isValid(s);/* Time O(N) */
};

const isValid = (s) => {
    let [ left, right ] =  [ 0, (s.length - 1) ];

    while (left < right) {                          /* Time O(N) */
           while ((left < right) && !isAlphaNumeric(s[left])) left++;  /* Time O(N) */
           while ((left < right) && !isAlphaNumeric(s[right])) right--;/* Time O(N) */

//         const [ leftCode, rightCode ] = getCodes(s, left, right);
  

        if (s[left] !== s[right]) return false;

        left++; right--;
    }

    return true;
}



const getCodes = (s, left, right) => [ getCode(s[left]), getCode(s[right]) ];

const getCode = (char) => char.toLowerCase().charCodeAt(0);

const isAlphaNumeric = (c) => {
    let alpha = c.charCodeAt(0)>='a'.charCodeAt(0) && c.charCodeAt(0)<='z'.charCodeAt(0);
    let num = c.charCodeAt(0)>='0'.charCodeAt(0) &&c.charCodeAt(0)<='9'.charCodeAt(0);

    return alpha || num;
};