/* CHAPTER 38-42*/

// Answer 1-math power(a,b)

var x = Math.pow(6, 3)
document.write(x)

// Answer 2-Leap Year

var type = +prompt("enter your year")

var leapYear = (type);
switch (leapYear) {
    case 2000:
        alert("2000 is a leap year!");
        break;
    case 2004:
        alert("2004 is a leap year!");
        break;
    case 2008:
        alert("2008 is a leap year!");
        break;
    case 2012:
        alert("2012 is a leap year!");
        break;  
    case 2016:
        alert("2016 is a leap year");
        break;
    case 2028:
        alert("2028 is also a leap year");
        break;
    case 2020:
        alert("2020 is a leap year!");
        break;
    case 2024:
        alert("2024 will be a leap year!");
        break;
    default:
        alert("Try again ");
}

// Answer 3-Area Of triangle

var a = 2;
var b = 3;
var c = 4;
var s = (a + b + c) / 2;
var areaofTriangle = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(areaofTriangle);

// Answer 4-Average & percentage

var math = +prompt("Enter your Mathematics Marks");
var phy = +prompt("Enter your Physics Marks");
var chem = +prompt("Enter your Chemistry Marks");

function main() {
    return math + phy + chem
}

function Avg() {
    return main() / 3
}

function perc() {
    return main() / 300 * 100
}
document.write("Your Average Mark Is" + " " + +Avg() + "<br>")
document.write("Your Average Percentage Is" + " " + perc())

// Answer 5-indexOf

var sent = "The quick brown fox jumps over the lazy dog"
var part = sent.indexOf("w")
document.write(part)

// Answer 6-Delete using map and replace

var str1 = ["My name is ameen my father name is zahid hussain"];

str1 = str1.map(function(str) {
    return str.replace(/[aeiou]/g, '');
});

console.log(str1);

// Answer 7-occurrences of two vowels

function findOccur() {
    var stri = "Pleases read this application and give me gratuity";
    var count = 0;
    let vowelRepeat = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
 {
  if (vowelRepeat) {
  count++;
  vowelRepeat = false;
  } else {
  vowelRepeat = true;
  }
   break;
  }
   default:
  vowelRepeat = false
 }
}
 return count
}
document.write(findOccur())

// Answer 8-DistanceB/WCities

var dist = +prompt("Write the distence B/W two cities", "in KM")
var m = dist * 1000; //for KM to meter
var f = dist * 3280.84; // for km to feets
var i = dist * 39370.1 //for KM to inches
var ce = dist * 100000 //for Km to centimeter
document.write(dist + " KM convert into meter is = " + m + "<br>" +
    dist + " KM convert into feet is = " + f + "<br>" +
    dist + " KM convert into inches is = " + i + "<br>" +
    dist + " KM convert into centimeter is = " + ce + "<br>")

// Answer 9-Function to calculate overtime pay

function calOvertimePay(hoursWorked) {
  const standardHours = 40; 
  const overtimeRate = 12.00; 
  
  if (hoursWorked <= standardHours) {
    return 0; 
  } 
  else {
    const overtimeHours = hoursWorked - standardHours;
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  }
}
const hoursWorked = 45; 
const overtimePay = calOvertimePay(hoursWorked);
console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);

// Answer 10-Input amount in hundreds

const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
// Cal num of each denomination of currency notes

let hundredsCount = amountInHundreds;
let fiftyCount = 0;
let tenCount = 0;

if (amountInHundreds >= 5) {
    // Cal 50s and 10s if the amount is 500 or more
    fiftyCount = Math.floor(amountInHundreds / 5);
    amountInHundreds %= 5;
    tenCount = amountInHundreds * 10;
} 
else {
    // Cal 10s for amounts less than 500
    tenCount = amountInHundreds * 10;
}

console.log("Cashier needs to give the following currency notes:");
console.log("100s: " + hundredsCount);
console.log("50s: " + fiftyCount);
console.log("10s: " + tenCount);
