/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp= new Map(nums.map((x,i)=>{
                return [x,i];
    }))
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        const complement = target - nums[index];
        const sumIndex = temp.get(complement);

        if (temp.has(target - nums[index]) && (temp.get(target - nums[index]) !== index)) return [ index, sumIndex ]
    }
    // for(let i=0;i<nums.length;i++){
    //     if(temp.has(target-nums[i]) && temp.get(target-nums[i])!=i){
    //         return [i,temp.get(target-nums[i])];
    //     }
    // }
    //         const isTarget = map.has(complement) && (map.get(complement) !== index)
    //     if (isTarget) return [ index, sumIndex ]
};