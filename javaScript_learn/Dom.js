// Node.ELEMENT_NODE(1);
// Node.ATTRIBUTE_NODE(2);

// var someNode = new Node();
// someNode.nodeName

// function converToArray(nodes){
//     var array = null;
//     try {
//         array = Array.prototype.slice.call(nodes,0);
//     } catch (error) {
//         array = new Array();
//         for (let i = 0; i < array.length; i++) {
//             array.push(nodes[i]);
            
//         }
//     }
//     return array;
    
// }

/**
 * Dincument类型
 */
// 取得对<Html>的引用
var html = document.documentElement;
console.log(html);
console.log(html === document.childNodes[0])
console.log(html === document.firstChild)

var body = document.body;
console.log(body)

var doctype = document.doctype
console.log(doctype);

// 取得文档标题
var title = document.title;
// 设置文档标题
document.title = "新的一页"
console.log(title);

// 取得完整URL
var url =  document.URL;
console.log("完整URL：" + url);


var domain = document.domain;
console.log("当前的域名："+ domain);


// 取得来源页面的URL
var referr = domain.referr;
console.log("来源页面的URL："+ referr);

/**
 * 查找元素
 */

 /**
  * 
  */

  var div = document.getElementById("myDiv");
  console.log(div);


//   
  var images = document.getElementsByTagName("img");
  console.log(images[0].src);
/**
 * 
 * namedItem()可以通过元素的name特性取得集合中的项
 */
  var myimages = images.namedItem("myImage")
  console.log(myimages.src);


  /**
   * 取得文档中的所有元素
   */
  var allElements = document.getElementsByTagName("*");
  console.log(allElements);


  var radios = document.getElementsByName("color");
  console.log(radios);


//   包含文档中所有带name特性的<a>元素
  var aAll =  document.anchors

  //包含文档中所有的<img>元素
  console.log("文档中所有的<img>元素 :"+document.images[0].src)

// 文档中所有带Href特性的<a>元素
  console.log(document.links)


  /**
   * 文档写入
   */

   document.write("<strong>" + (new Date()).toString() + "</strong>");
   window.onload = function(){
       //如果在文档加载结束后再调用docmunt.write()，那么输出的内容会将重写整个页面
    // document.write("<strong>" + (new Date()).toString() + "</strong>");
   };

   var div = document.getElementById("myDiv");
   console.log(div);
   console.log(div.tagName);
   console.log(div.nodeName);

   console.log(div.id)
//    与元素class特性对应，即为元素指定的css类
   console.log(div.className)
//    有关元素的附加说明信息
   console.log(div.title)

   /**
    * 
    * 取得特性
    */
console.log("取得特----------------- 性")
    console.log(div.getAttribute("id"));

    /**
     * attributes属性
     */
     var id = div.attributes.getNamedItem("id").nodeValue;
     var id = div.attributes["id"].nodeValue;  //简写 []表示
     console.log(id);

    /**
     * 使用这种语法设置特性的值，先取得特性的节点，然后将其nodeValue设置为新值
     */
     div.attributes["id"].nodeValue = "someOtherId"
     var someOtherid = div.attributes["id"].nodeValue;  //简写 []表示
     console.log(someOtherid)

     var oldAtt = div.attributes.removeNamedItem("id");
     console.log(oldAtt)

    //  var someOtherid = div.attributes["id"].nodeValue;  //简写 []表示
    //  console.log(someOtherid)