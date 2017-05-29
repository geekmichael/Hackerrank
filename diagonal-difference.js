function main() {
    var n = 4;
    var a = [];
    a[0] = '11 2 4 10';
    a[1] = '4 5 6 10';
    a[2] = '10 8 -12 10';
    a[3] = '0 5 6 9';
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = a[a_i].split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var i, j;
    var primaryDiagonal = 0, secondaryDiagonal = 0;
    for (i = 0; i < n; i++){
        //console.log(a[i][i]);
        primaryDiagonal += a[i][i];
    }
    for (j = n - 1; j >= 0; j--){
        //console.log(a[j][n-j-1]);
        secondaryDiagonal += a[j][n-j-1];
    }
    console.log(Math.abs(primaryDiagonal - secondaryDiagonal));
}

main();
