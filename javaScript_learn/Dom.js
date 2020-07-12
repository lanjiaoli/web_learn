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

    function outPutAttributes(element) {
        var pairs = new Array(),
        attrName,
        attrValue,
        i,
        len;

        for (let i = 0; i < element.attributes.length; i++) {
            attrName = element.attributes[i].nodeName;
            attrValue = element.attributes[i].nodeName;
            //specified：如果返回true则意味着html中指定了相应特性，要么通过setAttronite()方法设置了该特性，
            
            if (element.attributes[i].specified) {
                pairs.push(attrName+"=\"" + attrValue+"\"")
            }
            
        }


        return pairs.join(" ");
        
    }

    /**
     * 创建元素
     *     
     */

     var divMore = document.createElement("div");
    //  divMore.nodeValue = "这是我创建的元素"
     divMore.innerHTML = "这是我创建的元素"
     document.body.appendChild(divMore)

    //  if (cl) {
         
    //  }

    var element = document.createElement("div");
    element.className = "message";
    var textNode = document.createTextNode("Hello world");
    element.appendChild(textNode);
    // var textNode = document.createTextNode("Hello world");
    // element.appendChild(textNode);
    document.body.appendChild(element);
    //会将所有文本节点合并成一个节点
    element.normalize()
    
    /**
     * 分割文本节点
     * splitText()方法将一个文本节点分成两个文本节点，即按照指定位置分割nodeValue值
     */

     var newNode = element.firstChild.splitText(5);
     console.log(element.firstChild.nodeValue)
     console.log(newNode.nodeValue)

     /**
      * Comment 类型
      * nodeType 的值为8
      * nodeName的值为"#comment"
      */
     var div = document.getElementById("comment");
     var comment  =  div.firstChild;
     console.log(comment);

     /**
      * DocumentFragment类型
      * 
      */

      var fragment = document.createDocumentFragment();
      var ul = document.getElementById("myList");
      var li = null;
      for (let index = 0; index < 3; index++) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Item " + (index+1)));
        fragment.appendChild(li)
      }
      ul.appendChild(fragment);


      /**
       * Atter类型
       */

       var attr = document.createAttribute("align");

       attr.value = "left";

       element.setAttributeNode(attr);
       console.log(element.attributes["align"].value)


       /**
        * 10.2 DOM操作技术
        */

        /**
         * 动态脚本
         */

         var script = document.createElement("script");
         script.type = "text/javascript";
        //  script.src = "client.js";
        script.text = "function sayHi(){console.log('Hi')}"
         document.body.appendChild(script);
        

         function loadScriptString(code){
           var script = document.createElement("script");
           script.type = "text/javascript";
          try {
            script.appendChild(document.createTextNode(code));
          } catch (error) {
            script.text = code;
          }
          document.body.appendChild(script);
         };



         /**
          * 动态样式
          */
        //  动态添加外部CSS样式
          var link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = "styledom.css"
          var head = document.getElementsByTagName("head")[0];
          head.appendChild(link)


          //嵌入式css样式
          function loadStyleString(code){
            var style = document.createElement("style");
            style.type = "text/css";
          try {
            style.appendChild(document.createTextNode(code));
          } catch (error) {
            style.text = code;
          }
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(style)
          }

          loadStyleString("body{background-color:bisque}");

          var hr = document.createElement("hr");

          document.body.appendChild(hr)
          /**
           * 操作表格
           */
          //创建表格
           var table = document.createElement("table");
           table.border = 2;
           table.width = "100%";

          //  创建tbody
          var tbody = document.createElement("tbody");
          table.appendChild(tbody)

          // var row1 = document.createElement("tr");
          // tbody.appendChild(row1);

          // var cell1_1 = document.createElement("tr");
          // cell1_1.appendChild(document.createTextNode("cell 1, 1"));
          // row1.appendChild(cell1_1);

          // var cell1_2 = document.createElement("tr");
          // cell1_2.appendChild(document.createTextNode("cell 1, 2"));
          // row1.appendChild(cell1_2);

          tbody.insertRow(0);
          tbody.rows[0].insertCell(0);
          tbody.rows[0].cells[0].appendChild(document.createTextNode("cell,1,1"));
          tbody.rows[0].insertCell(1);
          tbody.rows[0].cells[1].appendChild(document.createTextNode("cell,1,2"));


          // // 创建第二行
          // var row2 = document.createElement("tr");
          // tbody.appendChild(row2);

          // var cell2_1 = document.createElement("tr");
          // cell2_1.appendChild(document.createTextNode("cell 2, 1"));
          // row1.appendChild(cell2_1);

          // var cell2_2 = document.createElement("tr");
          // cell2_2.appendChild(document.createTextNode("cell 2, 2"));
          // row1.appendChild(cell2_2);

          document.body.appendChild(table);
