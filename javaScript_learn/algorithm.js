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

const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    const DP = new Array(m+1);

    for (let index = 0; index <= m; index++) {
        DP[index]= new Array(n+1).fill(0);
    }

    let res = 0;

    for (let index = 1; index <= m; index++) {
        for (let j = 1; j <= n; j++) {
            if(A[index-1] == B[j-1]){
                DP[index][j] = DP[index - 1][j - 1] + 1;
            }
            res = Math.max(DP[index][j], res);
        }
        
    }
    return res;

}

var res = findLength([1,2,3,5,6,],[1,2,3,5,6]);
console.log(res);

 

/**
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 * 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // var length = matrix.length;
    // //总共的数量
    // var numbers =  new Array();
    // for (let index = 0; index < length; index++) {
        
    //     var values = matrix[index];
      
    //     for (let j = 0; j < values.length; j++) {
    //         numbers.push(values[j])
    //     }
    // }
    // numbers.sort((a,b) => a - b);

    var numbers =  matrix.reduce((a, b) => merge(a,b));
    var res = numbers[k-1];
    return res;
};
/**
 * 归并排序
 * @param {数组} left 
 * @param {数组} right 
 */
function merge(left , right){
    var llen = left.length;
    var rlen = right.length;

    var i = 0;
    var j = 0
    var res = [];
    while (i < llen && j < rlen) {
        var lres = left[i];
        var rres = right[j];
        if (lres <= rres) {
            res.push(left[i++]);
        }else{
            res.push(right[j++]);
        }
    }
    while(i < llen) res.push(left[i++])
    while(j < rlen) res.push(right[j++])
    return res;
}
var res = kthSmallest([
    [ 1, 2],
    [1,3] ], 2);
 console.log(res);



 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(){

    var obj = new Object()
    var left  = 0;
    var right = 1;

    return obj;
}
var sortedArrayToBST = function(nums) {
    const buildBST = (nums, start, end)=>{
        if (start > end) {
            return null;
        }
        const mid = (start + end)/2;
        const root = new TreeNode(nums[mid]);
        root.left = buildBST(nums,start, mid-1);
        root.right = buildBST(nums,mid+1,end);
        return root;
    }
    return buildBST(nums, 0, nums.length-1);
};

var resValue = sortedArrayToBST([-10,-3,0,5,9]);
console.log(resValue);

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    var maxLength = 0;
    var stack = [-1];
    
    for (let index = 0; index < s.length; index++) {
        var value = s[index];
        if(value == '('){
            //入栈
            stack.push(index)
        }else{
            //出栈
            stack.pop();
            if (stack.length == 0) {
                stack.push(index);
            }else{
                maxLength = Math.max(maxLength, index - stack[stack.length -1]);
            }
        }        
    }

    return maxLength;
    
};

console.log('====================================');
var result =  longestValidParentheses('()')
console.log(result);
console.log('====================================');