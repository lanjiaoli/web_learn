/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 */
var twoSum = function(numbers, target) {
    
    var left = 0;
    let n = numbers.length;
    var right = n-1;
    while (left < right ) {
        var leftN = numbers[left];
        var rightn =  numbers[right];
        var sum = leftN + rightn;
        if (sum == target) {
            return [left+1, right+1];
        }
        if (sum > target) {
            right--;
        }else{
            left++;
        }
    }
    return  [];
};
var reslut = twoSum([2, 7, 11, 15],9);
console.log(reslut);