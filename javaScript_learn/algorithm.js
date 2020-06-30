/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
    let length = Infinity;
    let left = 0;
    let sum = 0;
    for (var right = 0;right < nums.length ;right++) {
        sum += nums[right];
        while (sum >= s) {
            length = Math.min(length, right - left + 1);
            sum -= nums[left++];
        }
    }
    return length === Infinity ? 0 : length;
};

var lengh = minSubArrayLen(7,[2,3,1,2,4,3],);
console.log(lengh);


/**
 * 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => a - b)
    return nums[nums.length - k];
};
var value = findKthLargest([3,2,3,1,2,4,5,5,6] ,4);
console.log(value);

// 插入排序

var insertSort = function(nums){
    for (let index = 1; index < nums.length; index++) {
        var element = nums[index];
 
        var element2 = nums[index -1];
        // if(element2 > element){
        for (let j = index-1; j >= 0 ; j--){
            const element1 = nums[j];
            if(element1 > element){
                nums[j] = nums[j+1];
                nums[j+1] = element1;
            }
            // }
        }
    }
    
    return nums;
}
var numbers = insertSort([2, 1, 7, 9, 5, 8,44,10]);
console.log(numbers);

/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */


var CQueue = function() {
    this.stack = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.stack2.lengh) {
    while (this.stack.length) {
        this.stack2.push(this.stack.pop());
    }
    }
    return this.stack2.pop() || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue();
obj.appendTail(3);
var param_2 = obj.deleteHead();
console.log(param_2);

/**
 * 
 */
var sortChar = function(value){
    var array = value.split("");
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var num1 =   array[left];   
        array[left] =  array[right];
        array[right] = num1;
        left++;
        right--;
        
    }
    return array;
}

var sortArray = sortChar("asdfghjkl");
console.log(sortArray);