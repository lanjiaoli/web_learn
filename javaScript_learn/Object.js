var book = {
    _year: 2004,
    edition:1
};
Object.defineProperty(book,"year",{
    get: function() {
        return this._year;
    },
    set: function (newValue) {
      if (newValue > 2004) {
          this._year = newValue;
          this.edition += newValue - 2004;
      }  
    }
});
book.year = 2005;
console.log(book.edition);

/**
 * 定义多个属性
 */
var moreObj ={};
Object.defineProperties(moreObj,{
    _year:{
        wrtable : true,
        value : 2004
    },
    edition:{
        writable: true,
        value : 1,
    },
    year:{
        get:function(){
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
moreObj.year = 2006;
console.log(moreObj.edition);

/**
 * 读取属性的特性 可以取得给定属性的描述符
 */
var descriptor = Object.getOwnPropertyDescriptor(moreObj,"_year");
console.log(descriptor.value);
console.log(descriptor);


/**
 * 创建对象
 */
//工厂模式
function createPerson(name, age, job) {
    var o = new  Object();
    o.name = name;
    o.age = age
    o.job = job
    o.sayHi = function(){
        console.log(this.name);
    }
    return o;
};

var person1 = createPerson(
    "名字",12,"Software Engineer"
)
person1.sayHi()

/**
 * 构造函数模式
 */

 function Person(name, age, job){
     this.name = name;
     this.age = age;
     this.job = job;
     this.sayHi = function(){
         console.log(this.name);
         
     };
 };

 var  person2 = new  Person("构造函数",12,"Software Engineer")
 person2.sayHi();
//  当做普通函数调用

Person("普通函数",12,"Software Engineer");
window.sayHi();

// 在另一个对象作用域中调用
var otherObjc = new Object();
Person.call(otherObjc ,"另一个对象",12,"Software Engineer")
otherObjc.sayHi()
