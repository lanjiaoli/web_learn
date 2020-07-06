// 动态的属性
var person = new Object();

person.name = "这是一个名字的属性";
console.log(
    person.name
) ;

var name = "这又是一个名字";
name.age = 27;
console.log(
    name.age
) ;

var num = 5;
var num2 = num;
console.log(
    num2
) ;

 var obj1 = new Object();
 obj1.name = "Emm,复制变量";
// 这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个变量，改变其中一个变量，就会影响另一个变量
var obj2 = obj1;

console.log(obj2.name);
var obj4 = new Object();
obj4.name = obj1.name;


obj2.name = "Emm,我要改变了";
console.log(obj1.name);

console.log(obj4.name);

// typeof操作符是确定一个变量时字符串、数值、布尔值、还是Undefined的最佳工具
var s = "这是一个字符串"
console.log(typeof s);

// result = variable instanceof constructor;

console.log(obj1 instanceof Object);


// 4.2执行环境及作用域
var color = "blue";
function change() {
    if (color === "blue") {
        color = "red";
    }else{
        color = "blue";
    }
}
change();
console.log(color);


function buildUrl() {
    var qs = "?debug=true";
    /**
     * with语句接受的是location对象，因此其变量对象中就包含了location对象的所有属性和方法
     * 
     */
    with(location){
        var url = href + qs;
    }
    console.log(url);
    
    return url;
}


buildUrl()
/**
 * JavaScript 没有块级作用域
 * 
 * 如果初始化变量时没有使用var声明，该变量会自动被添加到全局环境
 */


 /**
  * 查询标识符
  */

  var eColor = "blue";
  var eColor = "eeee"
  function getcolor() {

      return eColor;
  }

  console.log(getcolor());
  

  /**
   * JavaScript有自动垃圾收集机制。
   * 原理：找出那些不再继续使用的变量，然后释放其占用的内存，为此，垃圾收集器会按照固定的时间间隔，周期性地执行者易操作
   */