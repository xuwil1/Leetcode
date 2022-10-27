/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0){
        return 0;
    }
    nums=nums.sort((a,b)=>a-b);
    let [maxScore, score]=[1,1];
   for(let i=1;i<nums.length;i++){
       if(nums[i]==nums[i-1]) continue;
       if(nums[i]==nums[i-1]+1){
           score++;
       }else{
           maxScore=Math.max(...[maxScore,score]);
           score=1;
       }
    }
    return Math.max(...[maxScore,score]);
};