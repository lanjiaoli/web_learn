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

/**
 * 原型模式 prototype 原型属性
 */

 function PersonType(){

 }
 PersonType.prototype.name = "原型属性";
 PersonType.prototype.age = 29;
 PersonType.prototype.job = "Soft Engineer";

 PersonType.prototype.sayHi = function(){
    console.log(this.name);
 };
 var  typePerson = new PersonType();
 typePerson.name = "修改后的值"
 console.log(typePerson.name)   
 typePerson.sayHi(); 
    typePerson.sayHi();
 delete typePerson.name;
 typePerson.sayHi();

 /**
  * 更简单的原型语法
  * constructor属性不再指向PersonType
  * 本质上完全重写了默认的prototype对象,因此 constructor 属性也就变成了新的对象的constructor属性
  */

  PersonType.prototype = {
      name : "简单的原型语法",
      age: 28,
      job : "Software Engineer",
      sayHi: function(){
          console.log(this.name);
      }
  }
  var friend = new PersonType()
  console.log(friend instanceof Object);
  
  console.log(friend instanceof PersonType);

  console.log(friend.constructor == PersonType);
  console.log(friend.constructor == Object);
  
  console.log(friend);
  /**
   * 动态原型模式
   */
  function PersonDynamic(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayHi != "function") {
        PersonDynamic.prototype.sayHi = function(){
            console.log(this.name);
            
        };    
    }
};

var friend = new PersonDynamic("动态原型模式",12,"software Engineer")
friend.sayHi()

/**
 * 寄生构造函数模式
 */

 function SpeciaArray(){
     var values = new Array()
     values.push.apply(values, arguments);
     values.toPipedString = function(){
         return this.join("|");
     }
     return values;
 }
 var colors = new SpeciaArray("red","blue","yellow");
 console.log(colors.toPipedString());
 
 /**
  * 继承 许多OO语言都支持两种继承方式：接口继承与实现继承，接口继承只继承方法签名，而实现继承则继承实际的方法，
  * 由于ES中无法实现接口继承，ES只支持实现继承，而且实现继承只要是依靠原型链来实现的。
  */

  function SuperType(){
      this.property = true;
  };
  SuperType.prototype.getSuperValue = function(){
      return this.property;
  };

  SuperType.prototype.getSuperValueName = function(){
    return "什么？";
    };
  function SubType(){
      this.subproperty = false;
  };
//   继承了SuperType
  SubType.prototype = new SuperType();

//   添加新方法
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}
// 重写超类型中的方法
SuperType.prototype.getSuperValue = function(){
    return false;
}
var instance = new SubType()
console.log(instance.getSuperValueName());
// console.log(instance.getSubValue());
console.log(instance.getSuperValue());


/**
 * 借用构造含糊
 */
function SuperTypeColors(){
    this.colors = ["red","blue","green"]
};


function SubType(){
    SuperTypeColors.call(this)
};

var instance1 = new SubType()
instance1.colors.push("black");
console.log(instance1.colors);

var instance2 = new SubType()
// instance2.colors.push("black");
console.log(instance2.colors);