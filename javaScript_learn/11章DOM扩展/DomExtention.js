/**
 * querySelector()
 * querySelector()方法接受一个CSS选择符，返回与该模式匹配的第一个元素，如果没有找到匹配元素，返回null
 */

//  获取body元素
 var body = document.querySelector("body")
//  获取ID为 "myDiv"的元素

var myDiv = document.querySelector("myDiv")

// 取得类为selected的第一个元素
var selected = document.querySelector(".selected")

//取得类为button的第一个图片元素
var button = document.querySelector("img.button")

// 会在文档元素的范围内查找匹配的元素。通过Element 类型调用querySelector()方法时，只会在元素后代元素范围内查找匹配的元素

/**
 * querySelectorAll 返回的所有匹配元素而不仅仅是一个元素，返回的是已个nodeList的实例
 */

//  取得所有类的""seleted"的所有元素
 var seleteds =  document.querySelectorAll(".seleted")

    // document.body.webkitMatchesSelector

    /**
     * 元素遍历
     */
    
    //  返回子元素的格式
    var childCount =  document.childElementCount
    // 指向第一个元素
    var firstElementChild =  document.firstElementChild
    // 指向最后一个元素
    var lastElementChild =  document.lastElementChild

    // 指向前一个同辈元素
    var preElementChild = document.previousSibling

    // 指向后一个同辈元素
    var nextSibling = document.nextSibling


    /**
     * HTML5
     * 与类相关的扩充
     * getElementsByClassName 接受一个参数或多个类名的字符串，返回带有指定类的所有元素
     * nodeList
     */
    // 取得勒种包含"username"和"current"的元素，类名的顺序无所谓
    var allCurrentUserNames = document.getElementsByClassName("userName current");

    // 取得ID为"myDiv”的元素中带有类型“selected“的所有元素
    // var selected = document.getElementById("myDiv").getElementsByClassName("selected")


    /**
     * classlist属性
     * 在操作类名时，可以通过className属性添加、删除和替换类名，因为clasname中是一个字符串
     */

    //  首先，取得类名字符串并拆分成数组
    var div = document.getElementsByClassName("bd user disabled")[0]
    // var classNames = div.className.split(/\s+/);
    //  var pos = -1, i ,len;
    //  for ( i = 0, len = classNames.length; i < len; i++) {
    //      if(classNames[i] == "user"){
    //          pos = i;
    //          break;
    //      }
    //  }
    //  classNames.splice(i, 1);

    //  div.className = classNames.join(" ");
    //  console.log(div.className);

     
    //  从列表中删除给定的字符串
     div.classList.remove("disabled")

    //  如果列表中已经存在给力的值，删除它，如果列表中没有给定的值。添加它
     div.classList.toggle("toggle")
     console.log(div.className);
     div.classList.toggle("toggle")
     console.log(div.className);

     /**焦点管理
      * 
      * 
      */

      var button = document.getElementById("myButton");

      button.focus()

     /**
      * HTMLDocument的变化
      */
     
        console.log(document.readyState)
        
      if(document.readyState == "complete"){
          console.log("加载完成");
      }

    //   插入标记
      /**
       * InnerHTML属性
       */
      