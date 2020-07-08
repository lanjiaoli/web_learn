

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    
    var stack = [-1];
    var maxLength = 0;

    for (let index = 0; index < s.length; index++) {
        
        var c = s.charAt(index);
        if (c == '(') {
            // 入栈
            stack.push(index);
        }else{
            // 栈顶出栈
            stack.pop();
            if(stack.length == 0){
                stack.push(index);
            }else{
                maxLength = Math.max(maxLength, index-stack[stack.length -1]);
            }
        }
        
    }
    return maxLength;

};

var result =  longestValidParentheses(")())())");
console.log(result);


/**
   * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var n = s.length;
    var m = p.length;

    const dp = new Array(n+1);

    for (let index = 0; index < n+1; index++) {
        dp[index] = new Array(m+1).fill(false);
    }
    dp[0][0] = true;
    for (let index = 1; index <= m; index++) {
        dp[0][index] = p[index-1] == "*" && dp[0][index-1];
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++){
            if (p[j-1] == '?' || s[i-1]== p[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            }else if(p[j-1] == '*' && (dp[i-1][j] || dp[i][j-1])){
                dp[i][j] = true;
            }
        }
        
    }
    console.log(dp);
    return dp[n][m];
};

var success = isMatch("acdcb","a*d?b");
console.log(success);