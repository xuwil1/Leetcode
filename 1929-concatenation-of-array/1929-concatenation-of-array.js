/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans=[];
    nums.forEach(x=>ans.push(x));
    nums.forEach(x=>ans.push(x));
    return ans;
};