/**
 * 基本数据类型
 */
var s1 = "first string";
var s2 = s1.substring(2);
console.log(s2);

var num = 10;
console.log(
    num.toFixed(2)
);
console.log('====================================');
console.log("字符串操作方法");
console.log('====================================');
/**
 * concat()可以接受任意多个参数
 * 专门用来拼接字符串的方法
 */
var stringValue = "hello ";
var result = stringValue.concat("world");
console.log(result);

var moreResult = stringValue.concat("world","!"," Yes");
console.log(moreResult);
/**
 * slice()与subSting()可以接受1个或者2个参数，第一个参数是指从哪里开始，第二个参数是指从哪里结束
 * substr()第一个参数是起始位置，第二个参数是字符串的长度
 */
console.log(moreResult.slice(3,7));
console.log(moreResult.substring(3,7));
console.log(moreResult.substr(3,7));

/**
 * 字符串的位置方法
 * indexOf() 从字符串的开头向后搜索子字符串
 * lastIndexOf() 从字符串末尾向前搜索子字符串
 */
console.log(moreResult.indexOf("o"));

console.log(moreResult.lastIndexOf("o"));

/**
 * trim(): ES5为所有字符串定义个trim()方法，这个方法会创建一个字符串的副本，删除前置及后缀的所有空格
 */

 var trimSting = "   Hello world !     ";
 var trimResultString = trimSting.trim();
 console.log(trimSting);
 trimSting = "2222222 "
 console.log(trimResultString);
 
 /**
  * 字符串大小写转换方法
  */

  
  console.log("原始值:"+ stringValue);  
  //转换为大写
  console.log("转换为大写"),
 console.log(
    
    stringValue.toUpperCase() 
 );
//  转换为小写
console.log("转换为大写"),
 console.log(
     
     stringValue.toLowerCase()
 );
 

 /**
  * 字符串的模式匹配方法
  * 
  */
 
  var text = "cat, bat , sat , fat";

  var pattern = /.at/;
  var matches = text.match(pattern);
  console.log(matches.index);
  console.log(matches[0]);
  console.log(matches);
  console.log(pattern.lastIndex);
  
  console.log("srarch()方法");
  var pos = text.search(/at/)
  console.log(pos); // 1

  console.log("replace()方法");
  var result = text.replace("at", "ond");
  console.log(result);//cond, bat , sat , fat
  //正则表达式 g 全局 
  result = text.replace(/at/g, "ond");  
  console.log(result);//cond, bond , sond , fond
  
  result = text.replace(/(.at)/g,"word($1)");
  console.log(result);//word(cat), word(bat) , word(sat) , word(fat)

//   replace()方法的第二个参数也可以是一个函数，在只有一个匹配项的情况下，
// 会向这个函数传递3个参数：模式的匹配项。模式匹配项在字符串总的位置，和原始字符串

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, orginalText){
        switch (match) {
            case "<":
                return "&lt;"
                break;
            case ">":
                return "&gt";
                
            case "&": 
                return "&amp;"
            case "\"":
                return "&quot";
            default:
                break;
        }
    });
}
var htmlText = htmlEscape("<p class=\"greeting\"> Hello world!</p>");
console.log(htmlText);//&lt;p class=&quotgreeting&quot&gt Hello world!&lt;/p&gt


/**
 * split()这个方法可以基于指定的分隔符将一个字符串分割成多个子字符，并将结果放在一个数组中，
 * 
 */
var colorText = "red,blue,green,yellow";
var colors1 =  colorText.split(",");
console.log(colors1); //["red", "blue", "green", "yellow"]

var colors2 = colorText.split(",",2);
console.log(colors2); //["red", "blue"]

var colors3 = colorText.split(/[^\,]+/);
console.log(colors3); //["", ",", ",", ",", ""]
/**
 * localCompare()：比较两个字符串，并返回下列值中的一个：
 * 1.如果字符串中在字母表中应该排在字符串参数之前，则返回一个负数
 * 2.如果字符串等于字符串参数，则返回0
 * 3.如果字符串中在字母表中应该排在字符串参数之后，则返回一个整数
 */

 var stringValue = "ca";
 console.log(stringValue.localeCompare("cb"));
 console.log(stringValue.localeCompare("ba"));
 console.log(stringValue.localeCompare("z"));

 function determineOrder(value){
     var result = stringValue.localeCompare(value);
     if (result < 0) {
         console.log("The String 'comes before the string");
         
     }else if (result > 0) {
        console.log("The String 'comes after the string");
     }else{
        console.log("The String 'is equel to the string");
     }
 }

 /**
  * fromCharCode()
  * 接受一个或多个字符编码，然后将它们转换成一个字符串，
  */
 console.log(String.fromCharCode(104,101,108,108,111)); //hello

 //URI编码方法
 var uri = "http://www.wrox.com/illegal value.htm#start";
//  encodeURI()除了空格之外的其他字符都原封不动，只有空格被替换成20%
 console.log(encodeURI(uri)); //http://www.wrox.com/illegal%20value.htm#start

 //encodeURIComponent()使用对应的编码替换所有非字母数字的字符
  console.log(encodeURIComponent(uri))
//   解码

/**
 * Math对象
 */

 var numbers = [22,11,44,222,555,33,111,245,643];
 var max = Math.max(22,11,44,222,555,33,111,245,643);
 var min = Math.min(22,11,44,222,555,33,111,245,643);
 console.log(max);
 
 console.log(min);
// 找到数组中的最大或最小值
 var arrMax = Math.max.apply(Math,numbers)
 console.log(arrMax);
 

//  Math.ceil()向上舍入
 console.log(Math.ceil(25.9));
//  Math.floor()向下舍入
 console.log(Math.floor(25.9));
//标准舍入
 console.log(Math.round(25.9));
 console.log(Math.round(25.4));

 console.log("random()随机");
//  random()随机返回一个大于等于0且小1的随机数
 var num = Math.floor(Math.random()*9 + 2);
 console.log(num);
 
 