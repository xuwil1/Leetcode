/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(k==nums.length){
        return nums;
    }
    let freq= new Map();
    for(const num of nums){
        // let occurence= freq.get(num) || 0
        freq.set(num, (freq.get(num)||0) +1);
    }
    const heap = Array.from(freq.entries());
    heap.sort((a,b)=>b[1]-a[1]);
    
    let temp=[];
    
    for(let i=0;i<k;i++){
        temp.push(heap.shift()[0]);
    }
    return temp;
};

