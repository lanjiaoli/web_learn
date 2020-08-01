/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */


var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return buildTree(1,n);
}


function buildTree(start , end){
    // 如果左侧大于右侧  则搜索树为空
    if (start > end){
        return [null];
    }
    const res = [];
    for (let i = start; i <= end; i++) {
        let  left_trees = buildTree(start, i-1);
        let right_trees = buildTree(i+1,end);
        console.log(left_trees);
        for (const ln of left_trees) {
            for (const rn of right_trees) {
                const cur = new TreeNode(i);
                cur.left = ln;
                cur.right = rn;
                res.push(cur);
            }
        }
    }
    return res;
}
// var generateTrees = function(n) {
//     if(n === 0) return [];
//     return generate_tree(1, n);
// };

// function generate_tree (start, end) {
//     const res = [];
//     if(start > end) return [null];
//     for (let i = start; i <= end; i++) {
//         let left_trees = generate_tree(start, i - 1);
    // console.log(left_trees);

//         let right_trees = generate_tree(i + 1, end);
//         for (const ln of left_trees) {
//             for (const rn of right_trees) {
//                 const cur = new TreeNode(i);
//                 cur.left = ln;
//                 cur.right = rn;
//                 res.push(cur);
//             }
//         }
//     }
//     return res;
// }
var result0721 =  generateTrees(3);
console.log(result0721);