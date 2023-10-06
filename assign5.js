//Chapter 26-30

// Answer 1

var p = prompt("Enter a positive number")
var a = ("the round of value is " + Math.round(p))
var b = ("the floor value is " + Math.floor(p))
var c = ("the ceil value is" + Math.ceil(p))

document.write("Your input is " + p + "<br>" + a + "<br>" + b + "<br>" + c)

// Answer 2

var n = prompt("Enter a negative number")
var a = ("the round of value is " + Math.round(n))
var b = ("the floor value is " + Math.floor(n))
var c = ("the ceil value is" + Math.ceil(n))

document.write("Your input is " + n + "<br>" + a + "<br>" + b + "<br>" + c)

// Answer 3

var absolute = prompt("Enter a number")

document.write("The absolute value of " + absolute + " is " + Math.abs(absolute))

// Answer 4

var dice = Math.floor( (Math.random() * 6) + 1)
document.write(dice)

// Answer 5

var dic = Math.floor((Math.random() * 2) + 1)
if (dic === 2) {
    document.write(dic + "<br>" + "head")
} else if (dic === 1) {
    document.write(dic + "<br>" + "tail")
}

// Answer 6

var rand = Math.floor(100 * Math.random() + 1)
document.write("A Random number between 1 and 100 is " + rand)


// Answer 7

var weigh = prompt("Enter Your weight in Gram")
var kg = (weigh / 1000)

document.write("The weight of user in kilogram is " + kg + "kg")

// Answer 8

var value = prompt("Enter the value between 1-10")
var rand1 = Math.floor(10 * Math.random() + 1)
if (rand1 == value) {
    alert("Congratulations, You have won the lottery!")
} else {
    alert("Sorry, better luck next time!")
}


// Chapter 31-34


// Answer 1

var dayTime = new Date()
document.write(dayTime);


// Answer 2

var month = ['January', 'Febraury', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var currentMonth = date.getMonth()
document.write("Current Month: " + month[currentMonth])


// Answer 3

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var day = new Date()
var currentDay = day.getDay()
document.write("Today is: " + day[currentDay])

var three = days[currentDay] = days[currentDay].slice(0, 3)

document.write("Today is " + days[currentDay])


// Answer 4

var daynam = prompt("Which day is today?")
daynam = namday.toLowerCase()
var sun = "sunday"
var sat = "saturday"
if (daynam === sun) {
    alert("It's Fun day")
} else {
    alert("Today is a work day")
}


// Answer 5

var dayy = +prompt("Enter a Date")

if (dayy >= 1 && dayy <= 15) {
    alert("First fifteen day of the month")
} else if (dayy > 15 && dayy <= 31) {
    alert("last day of the month")
} else {
    alert("Invalid input")
}

// Answer 6

const millisecondsSinceEpoch = currentDate.getTime();

const dyTime = new Date()
document.write(dyTime);
 
const millisecondsSinceStart = dyTime.getTime();
const minutesSinceSince = millisecondsSinceStart/ (60 * 1000);
const myDate = new Date(millisecondsSinceStart);

console.log("Current Date: "+dyTime+ "<br>"+"Elapsed milliseconds since January 1,1970: "+millisecondsSinceStart+" <br>"+"Elapsed minutes since January 1,1970: "+minutesSinceSince);

// Answer 7 

var day8 = new Date()
var day8 = date.getHours()
if (day8 >= 0 && day8 <= 12) {
    alert("Its AM")
} else if (day8 >= 13 && day8 >= 23) {
    alert("Its PM")
}


// Answer 8

var latDay8 = new Date("12/31/20")
document.write("Later Date: " + latDay8)

// Answer 9 

var ramDate = new Date("06/18/2015")
var presDate = new Date()
var ramDate2 = ramDate.getTime()
var presDate2 = presDate.getTime()
var diff = presDate2 - ramDate2
var total = diff / (1000 * 60 * 60 * 24)
total = Math.round(total)

document.write(total + " days have passed since 1st Ramadan,2015")

// Answer 10

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var diff1 = newDate.getTime() - pastDate.getTime()
var day1 = diff / (1000 * 3600 * 24)
var finalTime = day1 * 86400

document.write(
    "On reference date : "+ newDate + "<br>" + finalTime + " seconds had passed since the beginning of 2015"
)


// Answer 11

var current = new Date();
var hourAgo = current.setHours(current.getHours() - 1);
var olddate = new Date(hourAgo)

document.write("curent Date: " + current + "<br> 1 hour ago, it was " + olddate)


// Answer 12

var current = new Date();
var yearsAgo = current.setFullYear(current.getFullYear() - 100);
var olddate = new Date(yearsAgo)

document.write("Curent Date: " + current + "<br> 1 hour ago, it was " + olddate)


// Answer 13

var age = prompt("How old are you?");
var d = new Date();
var ageCal = d.getFullYear() - age;
document.write("Your age is " + age + "<br>" + "Your birth year is" + ageCal);



// Answer 14
var name = "Meerza Muhammad Wajih";

var date = new Date();
var month = date.getMonth();

var unit = prompt("Enter your number of units used: ");

var unitCharge = 50;

var netAmount = unit * unitCharge;

var lateDateCharge = 500;

var grossAmount = netAmount + lateDateCharge;

document.write("Customer Name: " + name + "<BR>");
document.write("Month: " + month + "<BR>");
document.write("Number of Units: " + unit + "<BR>");
document.write("Charge per init: " + chargeUnit + "<BR>");
document.write("Net Amount Payable(within due Date): " + netAmount + "<BR>");
document.write("Late payment surcharge: " + lateDateCharge + "<BR>");
document.write("Gross Amount payable(after due Date): " + grossAmount);

