var n = 6;

var i, j, k;
var outString;
for (i = 1; i <= n; i++){
    outString = '';
    for (j = n - i; j > 0; j --) {
        outString += ' ';
    }
    for (k = 0; k < i; k++) {
        outString += '#';
    }
    console.log(outString);
}
