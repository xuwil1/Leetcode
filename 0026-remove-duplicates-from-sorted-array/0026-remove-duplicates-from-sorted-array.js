/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left=0;
    let right=1;
    while(right<nums.length){
        if(nums[right]!=nums[right-1]){
            nums[left]=nums[right];
            left++;
        }
        right++;
    }
    return left;
};

var removeDuplicates = function(nums) {
    let l=1;
    let r=1;
    while (r < nums.length) {
        if (nums[r] != nums[r-1]) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    };
    return l;
};