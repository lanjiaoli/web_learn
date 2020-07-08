
//保存了页面窗口的信息
document.documentElement.clientWidth
document.documentElement.clientHeight

document.body.clientHeight

document.body.clientHeight
/**
 * 
 */
// 调整到(100,100)
window.resizeTo(100,100)
// 调整到(200,50)
window.resizeBy(100,50)

/***
 * 导航和打开
 */
// console.log(111);
// var wroxWin = window.open("https://www.baidu.com","height=400,width=400,top=10,left=10,resizable=yes")
// wroxWin.resizeTo(500,500);
// wroxWin.resizeTo(100,100);
var blocked = false
try {
    // var wroxWin = window.open("https://www.baidu.com","height=400,width=400,top=10,left=10,resizable=yes")
// wroxWin.resizeTo(500,500);
// wroxWin.resizeTo(100,100);
if (wroxWin == null) {
    blocked = true
}
} catch (ex) {
    blocked == true;
}

if (blocked) {
    console.log("The popup was blocked!");
}

/***
 * 间歇调用和超时调用
 */
 setTimeout(() => {
    console.log("这是一个超时的计时器");   
}, 1000);

var timeOutId = setTimeout(function(){
    console.log("超时调用实例");
},1000);
// 取消超时调用
clearTimeout(timeOutId);

/**
 * 间歇调用
 */

//  setInterval(() => {
//      console.log("间歇调用模式")
//  }, 2000);

// if(confirm("Hello confirm")){
//     alert("Hello JavaScript")
// }

// var result =  prompt("what's tour name","Michael")
//     if(result !== null){
//         console.log("welcome ," + result);
// }

/**
 * location对象
 * location是最有用的BOM对象之一，它提供了与当前窗口中加载的文档有关的信息
 */

 /**
  * 查询字符串的参数
  * location.search返回从问号到URL末尾的所有内容
  */

  function  getQueryStringArgs(){
      var qs = (location.search.length > 0 ? location.search.substring(1):""),
      args = {},
      items = qs.length? qs.split("&"):[],
      item = null,
      value = nul,
      i = 0
      len = items.length;

      for (let i = 0; i < len; i++) {
        item = items[i].split("=")
          name = decodeURIComponent(item[0]);
          name = decodeURIComponent(item[1]);
          if (name.length) {
              args[name] = value;
          }
      }
      return args;
  }

// location.assign("https://www.baidu.com");
  
//浏览器的名称
console.log("浏览器的名称:"+navigator.appCodeName);

console.log("浏览器的版本:"+navigator.appVersion);

console.log("完整浏览器的名称:"+navigator.appName);

console.log("表示cookie是否启用:"+navigator.cookieEnabled);

console.log("浏览器的主语言:"+navigator.language);


console.log("注册MIME类型数组:"+navigator.mimeTypes);


console.log("浏览器是否连接到网络:"+navigator.onLine);

console.log("浏览器的用户代理字符串:"+navigator.userAgent);

/**
 * 检测插件
 */
console.log("插件："+navigator.plugins.length);

// 
// ActiveXObject(name);

/**
 * Screen对象
 */

 console.log("未被系统占用的最左侧的像素值：" + screen.availWidth)
 console.log("高度：" + screen.availHeight)
 console.log("最左侧部件占用的像素值：" + screen.availLeft)

 console.log("屏幕像素高度：" + screen.height)

 /**
  * History对象
  */

  console.log(window.history);
//   history.go(-1)