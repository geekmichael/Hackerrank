var usrString = '1 2 3 4 5'
arr = usrString.split(' ');
arr = arr.map(Number);

var i, spliced;
var sums = [];
var arrLen = arr.length;
for (i = 0; i < arrLen; i++){
    spliced = arr.slice(0);
    spliced.splice(i, 1);
    sums.push(spliced.reduce(function(acc, val){
        return acc + val;
    }, 0));
}
console.log(Math.min.apply(null, sums), Math.max.apply(null, sums));
