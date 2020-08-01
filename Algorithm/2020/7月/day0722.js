/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {

    numbers.sort((a,b)=> a-b);
    return numbers[0];
};

var result =  minArray([1,3,5]);
console.log(result);