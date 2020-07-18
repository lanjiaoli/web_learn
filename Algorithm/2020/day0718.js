/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

    var n = s1.length, 
    m = s2.length,
    t = s3.length;

    if (n + m != t) {
        return false;
    }
    let dp = new Array(n+1).fill().map(item=>new Array(n+1).fill(false))
    dp[0][0] = true;
    console.log(dp);
    for(let i=1;i<=n;i++){
        dp[i][0] = dp[i-1][0]&&s3[i-1]==s1[i-1]
      }
      for(let i=1;i<=m;i++){
        dp[0][i] = dp[0][i-1]&&s3[i-1]==s2[i-1]
      }
    
    for (let i = 1; i <=  n; i++) {
        for (let j = 1; j <= m; j++) {
            var p = i + j - 1;
            dp[i][j] =(dp[i-1][j]&&s3[p]==s1[i-1])||(dp[i][j-1]&&s3[p]==s2[j-1])
        }
        
    }
    return dp[n][m];
};

console.log("2020.07.18")
var result =  isInterleave("aabcc","dbbca","aadbbcbcac");
console.log(result);
