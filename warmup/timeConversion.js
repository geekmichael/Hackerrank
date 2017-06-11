var time = '03:30:00PM';

var timeLen = time.length;
var timeUppercase = time.toUpperCase();
var militaryTime;
var hour = 0, militaryHour = 0;
var amPMstr = timeUppercase.substr(-2);
var amPMarray = ['AM', 'PM'];

if ((timeLen < 10) || (!amPMarray.includes(amPMstr))) {
    console.log("Please type the time with correct format, e.g. 05:05:14AM.");
}else{
    if (timeUppercase.match("12:00:00AM")) {
        militaryTime = "00:00:00";
    }else if (timeUppercase.match("12:00:00PM")) {
        militaryTime = "12:00:00";
    }else{
        hour = parseInt(timeUppercase.substr(0, 2));
        if (timeUppercase.endsWith("PM")) {
            if (hour < 12) {
                militaryHour = hour + 12;
            }else{
                militaryHour = hour;
            }
            militaryTime = militaryHour.toString() + timeUppercase.substr(2, 6);
        }else{
            if (hour == 12) {
                militaryTime = '00' + timeUppercase.substr(2, 6);
            }else{
                militaryTime = timeUppercase.substr(0, 8);
            }
        }
    }
    console.log(militaryTime);
}
