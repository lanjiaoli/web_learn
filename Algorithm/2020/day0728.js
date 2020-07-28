
//   Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
    this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var maxDepth = function(root) {
    // 当输入节点不存在时，返回为0
    if (root == null) {
        return 0;    
    }else{
        
        let lHeight = maxDepth(root.left)
        let rHeight = maxDepth(root.right)
        return Math.max(lHeight, rHeight) + 1;
    }

};

// 广度优先搜索
var maxDepth1 = function(root) {
    // 当输入节点不存在时，返回为0
    if (root == null) {
        return 0;    
    }
    let level = 0;

    let queue = [root];
    while(queue.length > 0){
        let len = queue.length;
        while (len--) {
            let first = queue.shift();
            if (first.left) {
                queue.push(first.left);
            }
            if (first.right) {
                queue.push(first.right);
            }
        }
        level++;
    }
    return level;

};
