// var message ;
// function test() {
//     // 局部变量
//     // var message = "hi";
//     //  message = "hi javaScript";


// }
// test();

// // alert(
// //     message
// // )
// var intNum = 55;
// var octalaNum1 = 070;
// /**
//  * 八进制 或十六进制的字面值来表示
//  * 其中八进制字面值的第一位必须是(0),然后八进制数字序列(0~7)
// */
// console.log(octalaNum1); //56

// /**
//  * 数据类型
//  *  ECMAScript 有5中简单数据类型
//  * Undeffined  : 未定义
//  * Null ： 这个值是对象或null 表示空对象指针 
//  * Boolean : 布尔类型
//  * Number : 数值
//  * String ： 字符串类型
//  */

//  //ES能够表示最小数字保存在 Number.MIN_VALUE 中
// var minNum =  Number.MIN_VALUE;
// console.log("最小是："+minNum);


// var num1 = Number("hi");//NaN
// var num2 = Number("1111"); //1111
// var num3 = Number("0002"); // 2
// var num4 = Number(""); //0 
// var num5 = Number(true);//1
// var num6 = parseFloat("111");//1

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6)


// var text = "this us the letter sigma: \u03a3.";
// console.log(text);

// var age = 11;
// var agerAsString = age.toString()
// console.log(agerAsString);

// /**
//  * toString 通过传递参数 可以输出二进制、八进制、十六进制。乃至其他有效进制的字符串值
//  */

//  var strNum = 10;

//  //二进制
//  var twoStr = strNum.toString(2);
//  console.log(twoStr);

//  //八进制
//  var eightStr = strNum.toString(8);
//  console.log(eightStr);

// // 十六进制
//  var sixtyStr = strNum.toString(16);

//  console.log(sixtyStr);


//  //MARK: Object类型

// // 创建对象
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     let ans = "";
//     let ca = 0;
//     for(let i = a.length - 1, 
//         j = b.length - 1;
//         i >= 0 || j >= 0; 
//         i--, j--) {
//         let sum = ca;
//         sum += i >= 0 ? parseInt(a[i]) : 0;
//         sum += j >= 0 ? parseInt(b[j]) : 0;
//         ans += sum % 2;
//         ca = Math.floor(sum / 2);
//     }
//     ans += ca == 1 ? ca : "";
//     return ans.split('').reverse().join('');
// };
 

// var addBinary = function(a, b) {
//     let nas = "";
//     let ca = 0;
//      for(let i = a.length -1 ,j = b.length -1 ;i>=0|| j>=0; i--,j--){
//          let sum = ca;
//          sum += j >=0 ? parseInt(a[i]) : 0; //1 1
//          console.log(sum);
//          sum += j >=0 ? parseInt(b[j]) : 0;//1 0
//          console.log(sum);//2 1
//          nas += sum%2;//0  1
//          ca = Math.floor(sum/2);//1 1
//          console.log(nas); 
//          console.log(ca);

//      }
//      nas += ca == 1? ca : "";

//      return nas.split('').reverse().join('');
// }

// console.log(addBinary(
//     '11','01'
// ));



