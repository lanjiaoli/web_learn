/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {

    new G  = new Array(n).fill(0);
    G[0] = 1;
    G[1] =  1;

    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            G[i] += G[j-1] *G[i-j];
        }
        
    }
    return G[n];
};

// 卡塔兰数

var catalaNnumTrees = function(n) {

    let C = 1;
    for (let index = 0; index < n; index++) {
        C = C * 2 * (2 * index+1)/(index+2);
        
    }
    return C;
    
};
