var client = function(){
    
    //呈现引擎
    var engine = {
        ie:0,
        gecko:0,
        webkit:0,
        khtml:0,
        opera:0,
        // 具体的版本号
        ver :null
    }

    // 浏览器
    var browser = {
        // 主要浏览器
        ie:0,
        firefox:0,
        safari:0,
        konq:0,
        opera:0,
        chrome:0,
        //具体的版本号
        ver:null
    }



     // 平台、设备和操作系统
     var system = {
        // 主要浏览器
        win:false,
        mac:false,
        x11:false,
        // 移动设备
        iphone:false,
        iPod:false,
        iPad:false,
        iOS:false,
        Android:false,
        NokiaN:false,
        WinMobile:false,
        // 游戏系统
        wii:false,
        ps:false
    };
    var ua = navigator.userAgent;
    if (window.opera) {
        
        engine.ver = browser.ver = window.opener.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
    }else if(/AppleWebit\/(\S+)/.test(ua)){
        engine.ver = RegExp["$1"];
        engine.webkit=parseFloat(engine.ver);
        // 确定是Chrome还是Safari
        if (/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        }else if(/Version\/(\S+)/.test(ua)){
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        }else{
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            }else if (engine.webkit < 312) {
                safariVersion = 1.2;
            }else if (engine.webkit < 412) {
                safariVersion = 1.3;
            }else  {
                safariVersion = 2;
            }
            browser.safari = browser.ver = safariVersion;
        }
        
    }else if(/KHTML\/(\S+)/.test(ua) || (/Knqueror\/(\S+)/.test(ua))){
        engine.ver =  browser.ver = RegExp["$1"];
        engine.khtml = browser.konq = parseFloat(engine.ver);
    }else if(/rv:([^\)]+) Gecko\/\d{8}/.test(ua) || (/Knqueror\/(\S+)/.test(ua))){
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(browser.ver);
        if (/FireFox\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    }else if(/MSIE\/([^;]+)/.test(ua) || (/Knqueror\/(\S+)/.test(ua))){
        browser.ver = RegExp["$1"];
        browser.ie = parseFloat(browser.ver);
    }

    browser.ie = engine.ie;
    browser.opera = engine.opera;

    // 检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p.indexOf("X11") == 0 || p.indexOf("Linux") == 0);

    if(system.win){
        if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp["$1"] == "NT") {
                switch (RegExp["$2"]) {
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;             
                    case "6.1":
                        system.win = "7";
                        break;       
                    default:
                        system.win = "NT";
                        break;     
                }     
            }else if(RegExp["$1"] == "9x"){
                system.win = "ME";
            }else{
                system.win = RegExp["$1"];
            }
        }
    }

    // 移动设备
    system.iphone = ua.indexOf("iPhone") > -1
    system.iPod = ua.indexOf("iPod") > -1
    system.iPad = ua.indexOf("iPad") > -1
    system.NokiaN = ua.indexOf("NokiaN") > -1
    // windows mobile
    if (system.win == "CE") {
        system.WinMobile = system.win;
    }else if (system.win == "Ph") {
        if(/Windows Phone OS (\d+.\d+)/.test(ua))
        {
            system.win = "Phone";
            system.WinMobile = parseFloat(RegExp["$1"]);
        }
    }


    // 检测iOS版本

    if (system.mac && ua.indexOf("Mobile") > -1) {
        if (/CPU (?:iPhone)?OS (\d+_\d+)/.test(ua)) {
            system.iOS = parseFloat(RegExp.$1.replace("_","."));
        }else{
            // 不能真正检测出来，所以只能猜
            system.iOS = 2;
        }
    }
    // 检测Android版本
    if (/Android (?:iPhone)?OS (\d+_\d+)/.test(ua)) {
        system.Android = parseFloat(RegExp.$1);
    }

    //游戏系统
    system.wii = ua.indexOf("Wii") > -1;
    system.ps = /playstation/i.test(ua);


    return {
        engine:engine,
        browser:browser,
        system :system
    }
}()

console.log(client().engine)
var p = navigator.platform
console.log(p);