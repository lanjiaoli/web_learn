/**
 * Date类型
 * 
 */

 //创建一个日期对象
 var date = new  Date()
 console.log('====================================');
 console.log(date);
 console.log('====================================');

 var someDate = new Date(Date.parse(
     "Jun 25,2020"
 ));
 console.log(someDate);

 
 var y2k = new Date(Date.UTC(
    2020,0
))
 console.log(y2k);
 
// 
 var start = Date.now();
 console.log(start);

 /**
  * 日期格式化
  */
 var dateString = y2k.toDateString();
 console.log(dateString);
 
 var timeSting = y2k.toTimeString();
 console.log(timeSting);


 /**
  * RegExp类型
  * 
  */
 var pattern = /at/g; //匹配字符串中所有‘at’的实例

 var pattern2 = /[bc]at/i; //匹配第一个'bat'或"cat',不区分大小写

 var pattern3 = /.at/gi ; //匹配所有以 at 结尾的3个字符的组合，不区分大小写

 var re = null,
    i;
    for(i = 0 ;i < 10 ;i++){
        re = /cat/g;
        var flag = re.test("catastrople");
        console.log(flag);
    }
    
    for(i = 0 ;i < 10 ;i++){
        re = new RegExp("cat","g");
        var flag = re.test("catastrople");
        console.log(flag);

    };



    var text  = "mom and dad and baby";

    var pattern1 = /mom( and dad( and baby)?)?/gi;
    var matches = pattern1.exec(text);
    console.log("RegExp实例方法");
    console.log(matches);
    console.log(matches.index);
    console.log(matches.input);
    console.log(matches[0]);
    console.log(matches[1]);
    console.log(matches[2]);
    

    /**
     * 组合继承
     */
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue" , "yellow"];
    }
    SuperType.prototype.sayName = function(){
        console.log(this.name);
    }
    function SubType(name, age){
        // 继承属性
        SuperType.call(this,name);
        this.age = age;
    }
    // 继承方法
    SubType.prototype = new SuperType()
    SubType.prototype.construtor = SubType;
    SubType.prototype.sayAge = function(){
        console.log(this.age);
    }
    var instancel = new SubType("Linuse", 28);
    instancel.colors.push("black");
    console.log(instancel.colors);
    instancel.sayAge();
    instancel.sayName();

    var instance2 = new SubType("Linuse", 28);
    console.log(instance2.colors);
    instance2.sayAge();
    instance2.sayName();



    function creatAnother(orginal){
        var clone = object(orginal);
        clone.sayHi = function(){
            console.log("hi");
        }
        return clone;
    }

   function inheritPrototype(subType,superType){
       var prototype = object(superType.prototype);
       prototype.construtor = subType;
       subType.prototype = prototype;
   }
   inheritPrototype(SubType, SuperType);
