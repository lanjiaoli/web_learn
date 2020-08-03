var addStrings = function(num1, num2) {

    let i = num1.length - 1;
    let j = num2.length - 1;
    let add = 0;
    var ans = "";
    while (i >= 0 || j>=0 || add != 0) {
        let x =  i >= 0  ? num1[i] - '0' : 0;
        let y = j >=0 ? num2[j] - '0' : 0;
        let result = x+y + add;
        ans = result%10  + ans;
        add = result/10 | 0;

        i--;
        j--;
    }
    return ans;
}