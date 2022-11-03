/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let [left,right,longest,max]=[0,0,0,0];
    let freq = new Array(26).fill(0);
    let ACharCode='A'.charCodeAt(0);
    while(right<s.length){
        let RIndex=s[right].charCodeAt(0)-ACharCode;
        freq[RIndex]++;
        longest=Math.max(longest,freq[RIndex]);
        let window = right-left+1;
        if(k<window-longest){
            let LIndex=s[left].charCodeAt(0)-ACharCode;
            freq[LIndex]--;
            left++;
            window=right-left+1;
        }
        max=Math.max(max,window);
        right++;
    }
    return max;
};