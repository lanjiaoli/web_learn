var person = {
    name : "这是一个名字",
    age: 29,
    5 : true

};
console.log(person.name);
console.log(person[5]);

// 与  new Object()相同
var person1 = {};


function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "Name" + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output = "Age" + args.age + "\n";
    }
    console.log('====================================');
    console.log(output);
    console.log('====================================');
}

displayInfo({
    name: "名字",
    age: 29
});
displayInfo({name:"greg"});

console.log(person["name"]);

/**
 * Array
 */

//  创建数值的基本方式有2种

var colors = new Array();
// 创建一个包含3项的数组
var colors1 = new Array(3);
// colors1 = ["1","2","3","5"]
colors1[4] = "5";
console.log(colors1);

console.log(colors1.length);


// 检测数组


var person2 = {
    toLocaleString: function(){
        return "名字"
    },

    toString: function(){
        return "toString"
    },
}

var person3 = {
    toLocaleString: function(){
        return "名字2"
    },

    toString: function(){
        return "toString2"
    },
}

var persons = [person2, person3];
console.log(persons);
console.log(persons.toString());

console.log(persons.toLocaleString());

var examples = ["1","2","3"];
// join方法，则可以使用不同的分隔符来构建这个字符串
console.log(examples)
console.log(examples.join(','));


// 栈方法

var stackColors = new Array();
//推入2项
var count = stackColors.push("red","green");

console.log(count);

count = stackColors.push("black");

console.log(count);

// 取得最后一项
var item = stackColors.pop();
console.log(item);
console.log(stackColors.length);

// 重排序方法

// reverse()
var values = [1,2,3,9,8,4,5,7];
console.log(values.reverse());

// sort
console.log(values.sort())


function compare(value1,value2) {
    if (value1 < value2) {
        return 1;
    }else if (value1 > value2) {
        return -1;
    }else{
        return 0;
    }
}
values.sort(compare);
console.log(values);

/**
 *  concat() 方法的是一或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中，如果传递的不是数组
 * 这些值就会被简单地添加到结果数组的末尾。
 */
var colors2 = ["red", "green", "blue"];
var colors22 = colors2.concat("yellow",["black"]);
// ["red", "green", "blue"];
console.log(colors2);
console.log(colors22); // ["red", "green", "blue", "yellow", "black", "browm"]

/**
 * slice() 它能够基于当前数组中的一或多个项创建一个新数组，
 * 可以寄售一或两个参数，即要返回项的起始和结束为止
 */

 var sliceColors = colors22.slice(1);
 
 var sliceColors2  = colors22.slice(1,4);
 console.log(sliceColors);
 console.log(sliceColors2);


/**
 * splice()主要用途是向数组的中部插入项
 * 使用这种方法的方式有3种，
 * 1.删除
 * 2.插入
 * 3.替换
 */

 var arr = ["1","2","3","4"];
 var remvoed = arr.splice(0,1); //删除第一项
 console.log(remvoed);

 console.log(arr);

remvoed = arr.splice(1,0,"22","333");//从位置 1开始插入两项
console.log(arr);
console.log(remvoed);
remvoed = arr.splice(1,1,"2","32");//插入2项  删除1项
console.log(arr);
console.log(remvoed);


/**
 * 位置方法
 * indexof() 和lastIndexOf()
 */
var numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(9));

console.log(numbers.indexOf(5,1));
console.log(numbers.lastIndexOf(9,9));


// every 如果该函数对每一项都返回true，则返回true
var everyResult = numbers.every(function (item, index, array) {
    return (item > 2);
});

console.log(everyResult);

// 如果任一项返回true,则返回true
var someResult = numbers.some(function(item,index,array){
    return (item > 2);
})
console.log(someResult);


var filterResult = numbers.filter(function(item,index,array){
    return (item > 2);
})

console.log(filterResult);

var mapResult = numbers.map(function(item){
    return item *2;
})
console.log(numbers);

console.log(mapResult);


numbers.forEach((item, index, array) => {
    console.log("值 ：" + item + "下标 ：" + index);
});



/**
 * 归并方法
 * 两个归并数组的方法： 
 * reduce() :从数组的第一项开始，逐个遍历到最后
 * 
 * reduceRight() 从数组的最后一项开始，向前遍历到第一项
 */


 var sum = numbers.reduce(function(prev, cur , index, array){
     return prev + cur;
 })
 console.log(sum);


 