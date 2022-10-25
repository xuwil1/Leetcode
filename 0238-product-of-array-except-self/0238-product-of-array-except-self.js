/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products=[]
    nums.forEach((x,i)=>{
                let temp=1;
                for(let j=0;j<nums.length;j++){
                    if(i!=j){
                        temp*=nums[j];
                    } 
                }
                products.push(temp);   
    })
    return products;
};