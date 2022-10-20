/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp= new Map(nums.map((x,i)=>{
                return [x,i];
    }))
    // for (let index = 0; index < nums.length; index++) {/* Time O(N) */
    //     if (temp.has(target - nums[index]) && (temp.get(target - nums[index]) !== index))
    //         return [ index, temp.get(target - nums[index]) ]
    // }
    for(let i=0;i<nums.length;i++){
        if(temp.has(target-nums[i]) && temp.get(target-nums[i])!=i){
            return [i,temp.get(target-nums[i])];
        }
    }

};