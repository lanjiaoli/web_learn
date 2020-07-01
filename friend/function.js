/**
 * 闭包
 */
function createComparisonFunction(propertyName){
    return function(object1 ,object2){
        // 这两行代码访问了外部函数中的变量 propertyName
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }; 
};

var compareName = createComparisonFunction("name");
var result = compareName({name  : "Bucgikas"},{name:"Greg"});
console.log(result);


function createFunctions1(){
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function(){
            return i;
        }
    }
    return result;
}

console.log(createFunctions1());

function createFunctions(){
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function(num){
            return function(){
                return num
            }
        }(i);
    }
    return result;
}
console.log(createFunctions()[1]());

// function assignHandler(){
//     var element = document.getElementById("someElement");
//     var id = element.id;
//     element.onclick = function(){
//         console.log(id);
//     }
//     element = null;
// }

// assignHandler();

function outputNumbers(count){
    for (let index = 0; index < count; index++) {
        
    }
    // console.log(index);
}
outputNumbers(2);


function myObject(){
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    this.publicMethod = function(){
        privateVariable++;
        console.log(privateVariable)
        return privateFunction()
    }
}
var instance = new myObject()
console.log(instance.publicMethod());