/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [left,right]=[0,height.length-1];
    let [maxArea,area]=[0,0];
    while(left<right){
        let [l,r]=[height[left],height[right]];
        area= height[left]<height[right] ? getArea(height[left],left,right) : getArea(height[right],left,right);
        maxArea=Math.max(maxArea,area)

        if(l<=r) left++;
        if(l>r) right--;
    }
    return maxArea;
};

function getArea(_height,left,right){
    return _height*(right-left);
}

