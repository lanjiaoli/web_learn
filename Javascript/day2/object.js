
var name = 'LJL';
function callVar(isNew){
    if (isNew) {
        var age = 20;
    }else{
        var age = 10;
    }
    console.log(age);
}
callVar(true);
console.log(name);
var name = "擦擦擦";
console.log(name);


//First One


var firstOne = 'firstOne';
function call(){
    console.log(firstOne);
    var firstOne = 'exchange';
}
call();


//第二题
// var firstOne1 = 'firstOne';
// function call1(){
//     console.log('第二题' + firstOne1);
//     let firstOne1 = 'exchange';
// }
// call1();


// 第三题

var threeName = 'threename';

function callVal(isTrue){
    if (isTrue) {
        let threeName = '修改后的数据';
    } else {
        
    }
    console.log('第三题 :'+ threeName);
}

callVal(true);



//第四题

var fourName = 'fourName';

function fourCall(isTrue) {
    if (isTrue) {
        console.log('第四题 ：' + fourName);
        let fourName = '前端小可';
    } else {
        
    }
}
// fourCall(true);


//第5题
let from = 'from';
console.log(window.from);

var type = 1;
console.log(window.type);


let myVariable = document.querySelector('h1')
alert('hello!');


document.querySelector('html').onclick = function(){
    alert('别戳我！！！');
}