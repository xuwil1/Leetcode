/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp= new Map(nums.map((x,i)=>{
                return [x,i];
    }))
    for(let i=0;i<nums.length;i++){
        if(temp.has(target-nums[i]) && temp.get(target-nums[i])!=i){
            return [i,temp.get(target-nums[i])];
        }
    }
};