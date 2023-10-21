//                            CHAPTER 31 -------34
// Answer 1

var daytime = new Date()
document.write(daytime);


// Answer 2

var month = ['January', 'Febraury', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var currentMonth = date.getMonth()
document.write("Current Month is: " + month[currentMonth])


//  Answer 3

var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var days = new Date()
var currentDay = days.getDay()
document.write("Current Day is: " + day[currentDay])

var three = days[currentDay] = days[currentDay].slice(0, 3)
document.write("Today is three letter" + days[currentDay])


//  Answer 4

var day1 = prompt("Enter the name of the day", "Find if the day is of work")
day1 = day1.toLowerCase()
var sun = "sunday"
var sun = "saturday"
if (day1 === sun) {
    alert("it is Fun day")
} else {
    alert("Today Is Work Day")
}


//  Answer 5

var day01 = +prompt("Enter a Date")
if (day01 >= 1 && day01 <= 15) {
    alert("The day is among the first fifteen days of the month")
} else if (day01 > 15 && day01 <= 31) {
    alert("The day is among the last fifteen days of the month")
} else {
    alert("Invalid number")
}

//  Answer 6

var date = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = date.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + date + "<BR>")
document.write("Elapsed miliseconds since January 1,1970 : " + min * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + min * 365 * 24 * 60);



//  Answer 7

var myDate = new Date()
var mydate2 = mydate.getHours()
if (mydate2 >= 0 && mydate2 <= 12) {
    alert("Its AM time")
} else if (mydate2 >= 13 && mydate2 >= 23) {
    alert("Its PM time")
}


//  Answer 8

var dateLaterOn = new Date("12/31/20")
document.write("Later Date: " + dateLaterOn)

//  Answer 9

var remDate = new Date("06 / 18 / 2015")
var presDate = new Date()
var ramaDate2 = ramaDate.getTime()
var presDate2 = presDate.getTime()
var diff = presDate2 - ramaDate2
var total = diff / (1000 * 60 * 60 * 24)
total = Math.round(total)

document.write(total + "have passed since 1st ramdan,2015")



//  Answer 10

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400
document.write(
    "On the reference date : " + newDate + "<br>" + finalTime + " seconds had passed since the beginning of 2015"
)


//  Answer 11

var checTime = new Date();
var hour1 = new Date();
var oldHour = hour1.setHours(hour1.getHours() - 1);
var olddate = new Date(oldHour)

document.write("Curent Date: " + checTime + "<br> 1 hour ago, it was " + olddate)



//  Answer 12

var checkTime = new Date();
var hour01 = new Date();
var oldHour = hour01.setFullYear(hour01.getFullYear() - 100);
var olddate = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<br> 1 hour ago, it was " + olddate)


//  Answer 13

var urAge = prompt("enter your current age");
var toDate = new Date();
var ageCal = toDate.getFullYear() - urAge;
document.write("Your age is " + urAge + "<br>" + "Your birth year is" + ageCal);



//  Answer 14

var name = "Meerza Muhammad Wajih";

var dat = new Date();
var month = dat.getMonth();
var unit = prompt("Enter your bill unit");
var unitCharge = 16;
var netAmount = unit * unitCharge;
var afterDueCharge = 500;
var grossAmount = netAmount + afterDueCharge;

document.write("Customer Name: " + name + "<BR>");
document.write("Month: " + month + "<BR>");
document.write("Number of Units: " + unit + "<BR>");
document.write("Charge per init: " + unitCharge + "<BR>");
document.write("Net Amount Payable(within due Date): " + netAmount + "<BR>");
document.write("Late payment surcharge: " + afterDueCharge + "<BR>");
document.write("Gross Amount payable(after due Date): " + grossAmount);


//                            CHAPTER 35 -------38
//  Answer 1

function date() {
    document.write(new Date())
}
date()


//  Answer 2

function names(n1, n2) {
    document.write("Assalamualaikum! " + n1 + " " + n2)
}

names("Wajih", "Usman")


//  Answer 3

var v1 = +prompt("enter first value for sum")
var v2 = +prompt("enter Second value for sum")

function valueSum(v1, v2) {
    alert(a + b)
}
valueSum(a, b)


//  Answer 4

var val1 = +prompt("Enter value 1");
var sign = prompt("Enter the Sign");
var val2 = +prompt("Enter value 2");
if (sign === "+") {
    document.write(val1 + val2)
} else if (sign === "*") {
    document.write(val1 * val2)
} else if (sign === "/") {
    document.write(val1 / val2)
} else if (sign === "-") {
    document.write(val1 - val2)
} else {
    document.write("Sign should be +, -, / or *")
}


//  Answer 5

function sqr(numb) {
    return numb * numb
}


//  Answer 6

function fact(num1) {
    if (num1 == 0)
        return 1;
    else {
        return (num1 * fact(num1 - 1));
    }
}
fact(5)


//  Answer 7

function count() {
    var start = +prompt("Enter number from where you want to start counting")
    var end = +prompt("Enter number to where you want to end counting")
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}

//  Answer 8

function pythagorus(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(pythagorus(4, 3));


//  Answer 9

function areaRect(width, height) {
    return width * height
}
areaRect(4, 5)



//  Answer 10

function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')
    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}


//  Answer 11

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(str) {
    str = str.split(" ")
    var arr = []
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
    }
    return arr.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))


//  Answer 12

function findThelongestWord(str) {
    var arr1 = str1.match(/\w[a-z]{0,}/gi);
    var temp = arr1[0];

    for (var i = 1; i < arr1.length; i++) {
        if (temp.length < arr1[i].length) {
            temp = arr1[i];
        }
    }
    return temp;
}
console.log(findThelongestWord('Web Development Tutorial'));



//  Answer 13

function CharCount(string) {
    var uchars = {};
    string.replace(/\S/g, function(l) {
        charCheck[l] = (isNaN(charCheck[l]) ? 1 : charCheck[l] + 1);
    });
    return charCheck;
}
console.log(CharCount("The quick brown fox jumps over the lazy dog"));



//  Question (14) //



function circumference(rad) {
    var cir = 2 * Math.PI * rad;
    alert("The circumference is " + Math.floor(cir))
}
circumference(3)

function area(rad) {
    var cir = Math.PI * (rad * rad)
    alert("The area is: " + Math.round(cir))
}
area(3)
