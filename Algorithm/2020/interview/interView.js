
// 写一个函数满足以下行为 
// 面试遇到的问题
// 输入对象 {"a":{"b":{"c":{"d":"h","j":"l","o":{"p":"q","r":"s"},"t":"u"}},"v":{"w":{"x":{"y":"z"}}}},"e":{"f":{"i":"k"},"m":"n"}} 
// 输出结果，按照层数，把同一层的属性放在同一个子数组内 [[a,e],[b,v,f,m],[c,w,i],[d,j,o,t,x],[p,r,y]];
var result = [];
let cache = {};
 function parse(obj, deep = 0){
    if(typeof obj === 'string') return []

    var keys = Object.keys(obj);
    for (var key in obj) {
        parse(obj[key],deep + 1)
    }
    cache[deep] = cache[deep] || [];
    cache[deep] = cache[deep].concat(keys);
}
parse({"a":{"b":{"c":{"d":"h","j":"l","o":{"p":"q","r":"s"},"t":"u"}},"v":{"w":{"x":{"y":"z"}}}},"e":{"f":{"i":"k"},"m":"n"}})
cache.length = Object.keys(cache).length
console.log(Array.prototype.slice.call(cache))