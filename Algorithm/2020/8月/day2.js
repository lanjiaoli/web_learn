
//   Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    var list = new Array();

    function  helper(node){
        if(node == null)
        return
        list.push(node);
        helper(node.left);
        helper(node.right);
    }

    helper(root);

    for (let i = 0; i < list.length-1; i++) {
        list[i].left = null;
        list[i].right = list[i+1]
    }
};

