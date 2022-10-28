/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [left,right]= [0,numbers.length-1];
    while(numbers[left]+numbers[right]!== target){
        if(numbers[left]+numbers[right] < target) left++;
                                                 
        if(numbers[left]+numbers[right] > target) right--;
    }
    return [left+1,right+1]
};