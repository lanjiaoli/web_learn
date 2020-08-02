/**
 * DOM2 &DOM3
 */

 /**
  * 样式
  */
//  确定浏览器是否支持DOM2级定义的CSS能力
 var supportsDOM2CSS = document.implementation.hasFeature("CSS","2.0");
 var supportsDOM2CSS = document.implementation.hasFeature("CSS2","2.0");


 /**
  * 12.2.1访问元素的样式
  */

  var myDiv = document.getElementById("myDiv");
//   设置背景颜色
  myDiv.style.backgroundColor = "red";
  myDiv.style.width = "100px"
  myDiv.style.height = "100px"
  myDiv.style.border = "1px solid green";
  myDiv.style.borderRadius = "10px"

  /**
   * Dom样式属性和方法
   */

  myDiv.style.cssText = "width:125px;height:125px;background-color:red"
//    通过它可以访问到style特性中的CSS代码
   console.log(myDiv.style.cssText)

//    应用给元素的CSS属性的数量
   console.log(myDiv.style.length)

//    CSS信息的CSSRule对象
   console.log(myDiv.style.parentRule)
    //给定属性的字符串值
   console.log(myDiv.style.getPropertyValue("height"))
   
//    返回给定位置的css属性的名称
   console.log(myDiv.style[0])


   // 从样式中删除给定的属性
   myDiv.style.removeProperty("borderRadius");

   /***
    * 计算样式
    */

    var computedStyle = document.defaultView.getComputedStyle(myDiv,null);

    console.log(computedStyle.backgroundColor);


   //  IE浏览器支持
    var currentStyle = myDiv.currentStyle;
    console.log(currentStyle)


    /**
     * 操作样式表
     */
    var  supportsDOM2StyleSheets = document.implementation.hasFeature("StyleSheets", "2.0");

   console.log(supportsDOM2StyleSheets);
    var sheet = null;
    console.log(document.styleSheets);
    for (let index = 0; index < document.styleSheets.length; index++) {
      sheet = document.styleSheets[index];
      console.log(sheet)
       
    }

    /**
     * CSS规则
     */

   //   var sheet = document.styleSheets[0];
   // //   取得规则列表
   //   var rules = sheet.cssRules || sheet.rules
   //   console.log(rules)

   // //   取得第一条规则
   //   var rule = rules[0];
   // //  返回当前规则的选择符文本
   //   console.log(rule.selectorText);
   // //   完整的规则对应的文本
   //   console.log(rule.style.cssText)

   //   console.log(rule.style.backgroundColor)

   //   rule.style.backgroundColor = "green"


     /**
      * 创建规则
      */
      // 添加新规则CSS
      // sheet.insertRule("body{background-color:black}",0)
      // //仅对IE有效
      // sheet.addRule("body{background-color:black}",0)

      // function  insertRule(sheet, selectorText,cssText,position){
      //    if (sheet.insertRule) {
      //       sheet.insertRule(selectorText+"{"+cssText+"}".position)
      //    }else if(sheet.addRule){
      //       sheet.addRule(selectorText+"{"+cssText+"}".position)
      //    }
      // }
      // /**
      //  * 删除规则
      //  */
      // //DOM方法
      // sheet.deleteRule(0);
      
      // //仅对IE有效
      // sheet.removeRule(0)

      // function deleteRule(sheet, index){
      //    if (sheet.deleteRule) {
      //       sheet.deleteRule(index)
      //    }else if(sheet.removeRule){
      //       sheet.removeRule(index);
      //    }
      // }


      /**
       * 元素的大小
       */
      //偏移量
      function getElementLeft(element){
         var actualLeft = element.offsetLeft;
         var current = element.offsetParent;
         while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
         }
         return actualLeft;
      }
      
      function getElementTop(element){
         var actualLeft = element.offsetTop;
         var current = element.offsetParent;
         while (current !== null) {
            actualLeft += current.offsetTop;
            current = current.offsetParent;
         }
         return actualLeft;
      }
      
      /**
       * 客户区大小
       */

       function getViewport(){
          if(document.compatMode == "BackCompat"){
             return{
                width: document.body.clientWidth,
                height: document.body.clientHeight
             }
          }else{
            //  Safari3.1之前不支持这个属性 会直接跳入这里
            return{
               width: document.documentElement.clientWidth,
               height: document.documentElement.clientHeight
            }
          }
       }

       console.log(document.body.clientWidth)

       console.log(document.body.clientHeight)

       /**
        * 滚动大小 指的是包含滚动内容元素的大小
        */

      //   在没有滚动条的情况下，元素内容的中高度
        console.log(document.documentElement.scrollHeight)

      //  在没有滚动条的情况下，元素内容的总宽度
        console.log(document.documentElement.scrollWidth)
      //  被隐藏在内容左侧的像素数
        console.log(document.documentElement.scrollLeft)
       //  被隐藏在内容区域上方的像素数
        console.log(document.documentElement.scrollTop)


        console.log(document.documentElement.offsetLeft)
        function getOffet(){
           console.log("获取偏移量");
           console.log(document.documentElement.scrollHeight)
           console.log('====================================');
           console.log(getElementLeft(document.documentElement)) 
           console.log('====================================');
           console.log("滚动状态" + document.documentElement.scrollTop)

         console.log(document.documentElement.offsetLeft)
         console.log(document.documentElement.offsetHeight)
         console.log(document.documentElement.offsetTop)
         console.log(document.documentElement.offsetWidth)
         console.log("获取偏移量完");
        }

        /**
         * NodeIterator
         */

         // var nodeIrerator = document.createNodeIterator();
         // // 作为搜索起点的树种的节点
         // nodeIrerator.root;
         // // 表示访问哪个节点的数字代码
         // nodeIrerator.whatToShow;
         console.log("NodeIterator")
         console.log(NodeFilter.SHOW_ALL)

         var whatToShow  = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT;

         console.log(whatToShow);


         var filter = {
            acceptNode:function(node){
               
            }
         }


         /**
          * TreeWalker是NodeIterator的一个更高级的版本
          */
         var div = document.getElementById("div1");
         var filter = function(node){
            return node.tagName.toLowerCase() == "li" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
         }

         var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT,filter,false);

         var node1 = walker.nextNode();
         // while (node1 !== null) {
         //    console.log(node1.tagName);
         //    node1 = walker.nextNode
         // }


         /***
          * 12.4范围，为了让开发人员更方便的控制页面， 模块定义了范围接口，通过范围可以选择文档中的一个区域，从而不必考虑节点的界限
          */

         //  DOM中的范围
         // 使用hasFeature()或者直接检测该方法
         var supportsRange = document.implementation.hasFeature("Range","2.0");
         var alsoSupportsRange = (typeof document.createRange == "function");

         // 创建DOM范围内
         var range = document.createRange();
         var p1 = document.getElementById("p1");
         range.selectNode(p1)
         // 包含范围起点的节点
         console.log(range.startContainer);
         // 范围在startContainer中起点的偏移量
         console.log(range.startOffset);
         // 包含范围终点的节点
         console.log(range.endContainer);
         // 范围在endContainer中终点的偏移量
         console.log(range.endOffset);

         /**
          * 操作DOM范围的内容
          */

          var p2 = document.getElementById("p2"),
            helloNode = p2.firstChild.firstChild,
            worldNode = p2.lastChild,
            range1 = document.createRange();
            range1.setStart(helloNode,2);
            range1.setEnd(worldNode,3);
            // 这个方法能够从文档中删除范围所包含的内容
            // range1.deleteContents();

            // extractContents()会返回范围的文档片段
            // var fragment = range1.extractContents();
            // p2.parentNode.appendChild(fragment);

            // cloneContents()范围范围对象的一个副本
            var fragment1 = range1.cloneContents();
            p2.parentNode.appendChild(fragment1);


            /**
             * 4 插入DOM范围中的内容
             */


             var span = document.createElement("span");
             span.style.color = "red";
             span.appendChild(document.createTextNode("Inserted text"));
            //  chauffeur到了hello的 llo前面,而该位置就是范围选取的开始位置
             range1.insertNode(span)
             range1.selectNode(helloNode);
            var span1 = document.createElement("span");
             span1.style.color = "yellow";
            //  环绕范围插入内容 后台会执行以下步骤
            /**
             * 1.提取出范围中的内容
             * 2.将给定节点插入到文档中原来范围所在的位置
             * 3.将文档片段的内容添加到给定的节点中
             */
             range1.surroundContents(span1);
             console.log(p2);


             /**
              * 5.折叠DOM范围
              * 所谓折叠范围，就是指范围中未选择文档的任何部分
              */

            //   折叠到起点
              range1.collapse(true);