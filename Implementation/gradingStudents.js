// Problem: https://www.hackerrank.com/challenges/grading

function solve(grades){
    var gradesLen = grades.length;
    var i, newGrade, remainder;
    var gradesUpdated = [];

    if (gradesLen) {
        grades.forEach(function(grade){
            remainder = grade % 5;
            if ((grade < 38) || (remainder < 3)) {
                // If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
                newGrade = grade;
            }else{
                // If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
                newGrade = grade + (5 - grade % 5);
            }
            gradesUpdated.push(newGrade);
        });
        return gradesUpdated;
    }else{
        return 'No grade given';
    }
}

function main() {
    // var n = parseInt(readLine());
    // var grades = [];
    var grades = [73, 67, 38, 33];
    // for(var grades_i = 0; grades_i < n; grades_i++){
    //   grades[grades_i] = parseInt(readLine());
    //}
    var result = solve(grades);
    console.log(result.join("\n"));
}

main();
