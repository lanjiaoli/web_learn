/**
 * click事件沿DOM树向上传播，在每一级都会发生，直至传播到document对象
 */

 /**
  * 事件捕获
  * 在事件驳货过程中，document对象首先接受到click事件，然后事件沿DOM树依次向下，一直传播到事件的实际目标。
  */


  /**
   * DOM事件流
   * 事件流包括三个阶段：事件捕获节点，处于目标阶段和事件冒泡阶段
   */

   function showMessage(message) {
      alert(message) 
   }

   /**
    * DOM0 级事件处理程序
    * 每个元素都有自己的事件处理程序属性，这些属性通常全部小写
    */

    var btn = document.getElementById("myBtn");
    btn.onclick = function(){
        alert("click");
    }

    // 删除事件处理程序
    btn.onclick = null;

    /**
     * DOM2 级事件处理程序
     * 
     */
    // 在按钮上添加事件处理程序
    var handle = function(){
        alert("什么人111？who are you ?")
    }
    btn.addEventListener("click",handle,false)

    // 移除事件处理程序
    btn.removeEventListener("click",handle, false);


    var eventUtil = {

        addhandle: function(element, type, handle){
            if (element.addEventListener) {
                element.addEventListener(type, handle, false);
            }else if (element.attachEvent) {
                element.attachEvent(type, handle, false);
            }else{
                element["on" + type] = handle;
            }

            
        },
        removeHandle:function(element, type, handle){
            if (element.removeEventListener) {
                element.addEventListener(type, handle, false);
            }else if (element.datachEvent) {
                element.datachEvent(type, handle, false);
            }else{
                element["on" + type] = null;
            }
        }
    };

    eventUtil.addhandle(btn, "click", handle);


    /**
     * 事件对象
     * 
     * 在触发DOM上的某个事件，会产生一个事件对象event，这个对象中包含着所有与事情有关的信息
     */

    var handler1 = function(event){
        console.log(event.eventPhase)
        switch (event.type) {
            case "click":
                alert("你点击的是我啊")
                break;
            case "mouseover":
                event.target.style.backgroundColor = "red";
                break;
            case "mouseout":
                event.target.style.backgroundColor = "";
                break;
            default:
                break;
        }
    }

    btn.onclick = handler1;
    btn.onmouseover = handler1;
    btn.onmouseout= handler1;


    

    /**
     * 事件类型
     */

    //  load:  当页面完全加载后在window上面触发，当所有框架都加载完毕时，在框架上面触发                        
    // eventUtil.addhandle(window,"load",function (event){
    //     alert("页面加载完毕")
    // })

    // eventUtil.addhandle(window,"load",function(){
    //     alert("加载完毕")
    //     var link = document.createElement("link");
    //     link.type = "text/css";
    //     link.rel = "stylesheet";
    //     eventUtil.addhandle(link, "load", function(){
    //         alert("css load");
    //     })
    //     link.href = "example.scss";
    //     document.getElementsByTagName("head")[0].appendChild(link);
    // });

    /**
     * unload事件 ：与load事件对应的是unload事件，这个事件在文档被完全卸载后触发，
     * 只要用户从一个页面奇切换到另一个页面，就会触发unload事件
     */

     /**
      * resize事件：
      * 当浏览器窗口被调整到一个新的高度或者宽度时，就会触发resize事件
      */

      eventUtil.addhandle(window,"resize" ,function(){
          alert("你调整了出口的高度/宽度")
      })
    

      /**
       * 13.4.3鼠标与滚轮事件
       */

       var myDiv = document.getElementById("myDiv");
    //    获取鼠标事件的客户端坐标信息
       eventUtil.addhandle(myDiv, "click",function(event){
            // event = eventUtil.getEvent(event);
            console.log("Client coordinates:" + event.clientX + "," + event.clientY);

            //这两个属性表示鼠标光标在页面中的位置
            console.log("page coordinates:" + event.pageX + "," + event.pageY);
            //鼠标指针相对于整个屏幕的坐标信息
            console.log("Screen coordinates:" + event.screenX + "," + event.screenY);

       })

       // 修改键

       eventUtil.addhandle(myDiv, "click", function(event){
           var keys = new Array();

           if (event.shiftKey) {
            keys.push("shift");   
           }
           if (event.ctrlKey) {
            keys.push("ctrl");   
           }
           if (event.alttKey) {
            keys.push("alt");   
           }
           if (event.metatKey) {
            keys.push("meta");   
           }

           console.log("keys:" + keys.join(","));
       })


       //相关元素
       
       eventUtil.addhandle(document,"mousewheel",function(event){
           console.log(event.wheelDelta);
       })