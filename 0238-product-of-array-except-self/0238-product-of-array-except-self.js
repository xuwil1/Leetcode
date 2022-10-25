/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products=[]
    let pre=1;
    let post=1;
    for(let i=0;i<nums.length;i++){
        products[i]=pre;
        pre*=nums[i];
    }
    for(let i=nums.length-1;i>=0;i--){
        products[i]*=post;
        post*=nums[i];
    }
    return products;
};