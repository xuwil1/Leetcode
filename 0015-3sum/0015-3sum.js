/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let temp=[];
    for(let i=0;i<nums.length-2;i++){
        let [target,j,k]=[-nums[i],i+1,nums.length-1];
        if(prev(nums,i)) continue;
        while(j<k){

            if(nums[j]+nums[k]==target){
                temp.push([-target,nums[j],nums[k]]);
                j++;
                k--;
                while(j<k && prev(nums,j)) j++;
                while(j<k && next(nums,k)) k--;
                continue;
            }

                if(nums[j]+nums[k]<target) j++;
                if(nums[j]+nums[k]>target) k--;
        }
    }
    return temp
};
    
    
function prev(nums,index){
    return nums[index]==nums[index-1]
}    
function next(nums,index){
    return nums[index]==nums[index+1]
}    
