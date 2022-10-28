/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums.sort((a,b)=>a-b);
//     let temp=[];
    
//     for(let i=0;i<nums.length-2;i++){
//         if(nums[i]==nums[i-1]) continue;
//         let [j,k]=[i+1,nums.length-1];
//         let target=-nums[i];
//         while(j<k){
//             if(nums[j]+nums[k]<target || nums[j]==nums[j-1]) j++;
//             if(nums[j]+nums[k]>target || nums[k]==nums[k+1]) k--;
//             if(j<k && nums[j]+nums[k]==target) {
//                 temp.push([-target,nums[j],nums[k]]);
//             }
//             j++;
//             k--;
//         }
//     }
//         return temp;
// };
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

            continue;
        }

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        const isTargetLess = target < sum;
        if (isTargetLess) right--;
    }
};