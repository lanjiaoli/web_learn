function getimage() {
    var image = "";
    var images = document.getElementsByTagName("img");
    console.log(images)
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        if (element.src.length==0) {
            imgScr = imgScr + objs[i].src + '+';;    
        }else{
            imgScr = imgScr + objs[i].dataset.src + '+';\
        }
    console.log(element.dataset.src);
        
    }

    // console.log(image);
}

getimage()

//创建对象的2种方式
let person = new Object();
person.name = 'Linuse'
person.age = 28
person.welcome = function() {
   console.log('he name is' + this.name  + 'age is' + this.age);
};

//键值对
let person2 = {
    name : 'Linuse',
    age : 20,
    welcome : function(){
       console.log('he name is' + this.name  + 'age is' + this.age);

    }

};

let animal = {
    _name: '这是一个名字',
};
// 对象中的属性可以通过‘defineProperty’动态添加
Object.defineProperty(animal, 'age',{
   // 可配置性  表明是否可以删除或修改该属性 
   configurable: true,
   // 是否可通过for循环来遍历返回该属性
   enumerable : true,
   // 是否可对属性的值进行修改
   writable:true,
   
   //值
   value: 10

});

var name = '这是一个属性名称'

function callVar(isNew){
   if (isNew) {
       var age = 20;
   }else{
       var age = 30;
   }

   callVar(true)
   console.log(name);
};
function createPerson(name,age){
   let o = new Object();
   o.name = name;
   o.gae = age;
   o.welcome = function(){
       console.log('He name is ' + this.name + ' age is ' + this.age);
   };
   return o;
}

function Person(name, age){
   this.name = name;
   this.age = age;
   this.welcome = function(){
       console.log('He name is ' + this.name + ' age is ' + this.age);
   };
}


let person3 =  new Person('person1' , 30);
person3.welcome();
