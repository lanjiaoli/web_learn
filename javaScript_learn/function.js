/**
 * Function函数
 */

/**
 * 没有重载
 * @param {*} num 
 */
function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

console.log(addSomeNumber(100));


/**
 * 函数声明与函数表达式
 */
//次代码可以运行，因为在代码开始执行之前，解析器就已经通过一个名为函数声明提升的过程，读取并将
// 函数声明添加到执行环境中，
console.log(sum(
    100,150
));
function sum(num1, num2){
    return num1 + num2;
}


/**
 * 在执行到函数所在的语句之前，变量sum中不会保存有对函数的引用，
 */
// console.log(sum1(100,150));
var sum1 = function(num1,num2){
    return num1 + num2;
};

console.log("作为值的函数");

function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num + 10;
}
 var result1 = callSomeFunction(add10,10);

console.log(result1);

function getGreeting(name){
    return "hello," + name;
}

var result2 = callSomeFunction(getGreeting,"Nicholas");
console.log(result2);

/**
 * 函数内部属性
 * 在函数内部有两个特殊的对象： arguments 和this 
 * arguments ：是一个类数组对象，包含传入函数中的所有参数 
 */
console.log("函数内部属性");
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else{
        return num * arguments.callee(num -1);
    }
}

var trueFactorial = factorial;
factorial =  function(){
    return 0;
};
console.log(trueFactorial(5));
console.log(factorial(0));

/**
 * this :引用的是函数执行的环境对象。
 */

 window.color = "red";
 var o = {color: "blue"};
 function sayColor(){
     console.log(this.color);
 };

 sayColor();
 o.sayColor = sayColor;
 o.sayColor()

 console.log("caller函数对象属性");
 
 function ourer() {
     inner();
 }
 function inner(){
     console.log(arguments.callee.caller);
 };
 ourer();


 /**
  * 函数属性和方法
  * 每个函数中都包含了2个属性：
  * length : 表示函数希望接受的命名函数的个数
  * prototype ： 保存他们所有实例方法的真正
  */

  console.log("函数属性和方法");
  function sum(num1 , num2){
      return num1 + num2;
  }

  function callSum1(num1, num2){
      return sum.apply(this,arguments);//传入arguments对象
  }
  function callSum2(num1, num2){
    return sum.apply(this,[num1, num2]);//传入数组
}
  
console.log(callSum1(10,10));
console.log(callSum2(10,10));



class ListNode {
}
var removeDuplicateNodes = function(head) {
    let obj = {};
    var dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    console.log(head);
    while (cur) {
        if (obj[cur.val]) {
            pre.next = cur.next;
            cur = pre.next;
        }else{
            obj[cur.val] = true;
            pre = pre.next;
            cur = cur.next;
        }

    }
    return dummy.next
};
var result = removeDuplicateNodes([1, 2, 3, 3, 2, 1]);
console.log(result);
