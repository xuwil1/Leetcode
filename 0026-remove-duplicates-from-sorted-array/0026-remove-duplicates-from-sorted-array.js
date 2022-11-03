/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            continue;
        }
        nums[pointer]=nums[i];
        pointer++;
        
    }
    return pointer;
};