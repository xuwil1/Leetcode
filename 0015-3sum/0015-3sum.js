/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let temp=[];
//     for(let i=0;i<nums.length-2;i++){
//         let [target,j,k]=[-nums[i],i+1,nums.length-1];
//         if(prev(nums,i)) continue;
//         while(j<k){

//             if(nums[j]+nums[k]<target) j++;
//             if(nums[j]+nums[k]>target) k++;
//             if(nums[j]+nums[k]==target){
//                 temp.push([-target,nums[j],nums[k]]);
//             }
            

//             j++;
//             k--;
//             while(prev(nums,j)) j++;
//             while(next(nums,k)) k++;
//         }
//     }
//     return temp
// };
    
    
// function prev(nums,index){
//     return nums[index]==nums[index-1]
// }    
// function next(nums,index){
//     return nums[index]==nums[index+1]
// }    

var threeSum = function (nums, sums = []) {
    nums.sort((a, b) => a - b);

    for (let first = 0; first < nums.length - 2; first++) {
        if (isPrevDuplicate(nums, first)) continue;

        const [target, left, right] = [
            -nums[first],
            first + 1,
            nums.length - 1,
        ];

        search(nums, target, left, right, sums);
    }

    return sums;
};

const isPrevDuplicate = (nums, index) => nums[index - 1] === nums[index];

const isNextDuplicate = (nums, index) => nums[index] === nums[index + 1];

const search = (nums, target, left, right, sums) => {
    while (left < right) {
        const [leftVal, rightVal] = [nums[left], nums[right]];
        const sum = leftVal + rightVal;

        const isTarget = sum === target;
        if (isTarget) {
            sums.push([-target, leftVal, rightVal]);
            left++;
            right--;

            while (left < right && isPrevDuplicate(nums, left)) left++;
            while (left < right && isNextDuplicate(nums, right)) right--;

            // continue;
        }

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        const isTargetLess = target < sum;
        if (isTargetLess) right--;
    }
};