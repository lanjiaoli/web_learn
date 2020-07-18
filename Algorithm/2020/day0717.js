// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var n = nums.length;
    var low = 0;
    var hight = n -1;
    var ans =  n;
    while (low <= hight) {
        var mid  = ((hight - low)>>1) + low;
        var midnum = nums[mid];
        if (midnum <= target) {
            ans = mid;
            hight = mid -1;
        }else{
            low = mid + 1;
        }
    }
    
   return ans

};