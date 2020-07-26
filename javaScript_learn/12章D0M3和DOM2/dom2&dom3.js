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

     var sheet = document.styleSheets[0];
   //   取得规则列表
     var rules = sheet.cssRules || sheet.rules
     console.log(rules)

   //   取得第一条规则
     var rule = rules[0];
   //  返回当前规则的选择符文本
     console.log(rule.selectorText);
   //   完整的规则对应的文本
     console.log(rule.style.cssText)

     console.log(rule.style.backgroundColor)

     rule.style.backgroundColor = "green"


     /**
      * 创建规则
      */
      // 添加新规则CSS
      sheet.insertRule("body{background-color:black}",0)
      // //仅对IE有效
      // sheet.addRule("body{background-color:black}",0)

      function  insertRule(sheet, selectorText,cssText,position){
         if (sheet.insertRule) {
            sheet.insertRule(selectorText+"{"+cssText+"}".position)
         }else if(sheet.addRule){
            sheet.addRule(selectorText+"{"+cssText+"}".position)
         }
      }
      /**
       * 删除规则
       */
      //DOM方法
      sheet.deleteRule(0);
      
      //仅对IE有效
      sheet.removeRule(0)

      function deleteRule(sheet, index){
         if (sheet.deleteRule) {
            sheet.deleteRule(index)
         }else if(sheet.removeRule){
            sheet.removeRule(index);
         }
      }


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