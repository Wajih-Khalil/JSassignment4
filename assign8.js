/*   CHAPTER 38-42   */


// Answer 1 (Custom power A to B)

var x = Math.pow(2, 8)
document.write(x)

// Answer 2 (checking Leap Year)

var year = +prompt("enter your year")

var yearCheck = (write);
switch (yearCheck) {
    case 2012:
        alert("2012 was a leap year");
        break;
    case 2016:
        alert("2016 was a leap year");
        break;
    case 2020:
        alert("2020 was a leap year!");
        break;
    case 2024:
        alert("2024 will be a leap year");
        break;
    case 2028:
        alert("2028 will be a leap year");
        break;
    default:
        alert("Try again ");
}

// Answer 3 (Area Of triangle)

var a = 2;
var b = 3;
var c = 4;
var s = (a + b + c) / 2;
var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(area);

// Answer4 (Average & percentage)

var sub1 = +prompt("Enter your Mark Obtained in Maths");
var sub2 = +prompt("Enter your Mark Obtained in Physics");
var sub3 = +prompt("Enter your Mark Obtained in Computer");

function sum() {
    return sub1 + sub2 + sub3;
}

function Average() {
    return sum() / 3
}

function percentage() {
    return (sum() / 300) * 100
}

document.write("Your Average of three subjects is: " +Average() +"<br>")
document.write("Your Percentage of three subjects Is" +percentage() +"<br>" )


// Answer 05 (indexOf)

var text = "Have faith step onto the cloud of Islam";
var findLetter = a.indexOf("f");

document.write(findLetter);


// Answer 6 (Deleting vowels)

var str = "Hello! How are you doing today?";

var strFind = [str]; 

strFind = strFind.map(function (str) {
    return str.replace(/[aeiou]/g, '');
});

console.log(strFind);



// Answer 7 (find occurrences like ea ea ui)

function findOccurrences() {
    var stri = "Pleases read this application and give me gratuity";
    var count = 0;
    let foundVowel = false;

    for (const letter of stri.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (foundVowel) {
                        count++;
                        foundVowel = false;
                    } else {
                        foundVowel = true;
                    }
                    break;
                }
            default:
                foundVowel = false;
        }
    }

    return count;
}

document.write(findOccurrences())

// Answer 8 (Distance between cities)

var distance = +prompt("Write the distence between two cities in km")

var m = distance * 1000; //km to meter
var ft = distance * 3280.84; //km to feets
var iN = distance * 39370.1 //km to inches
var cen = distance * 100000 //km to centimeter
document.write(distance + " km converted into meter is = " + m + "m <br>" );
document.write(distance + " km converted into feet is = " + ft + "ft <br>" );
document.write(distance + " km converted into inches is = " + iN + "in <br>");
document.write(distance + " km converted into centimeter is = " + cen + "cm <br>");


// Answer9 (over time of employees)

function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;

    if (hoursWorked <= regularHours) {
        return 0; 
    } 
    else {
        const overtimeHours = hoursWorked - regularHours;
        const overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    }
}

const hoursWorkedExample = 45;
const overtimePayExample = calculateOvertimePay(hoursWorkedExample);

console.log(`Hours worked: ${hoursWorkedExample} hours`);
console.log(`Overtime pay: Rs ${overtimePayExample.toFixed(2)}`);


// Answer 10 (Withdrawn money)

function calCurrencyNotes(amountInHundreds) {
    const note100 = 100;
    const note50 = 50;
    const note10 = 10;

    // Calculate the number of each denomination
    const numberOf100s = Math.floor(amountInHundreds);
    const remainingAmount = (amountInHundreds - numberOf100s) * note100;
    const numberOf50s = Math.floor(remainingAmount / note50);
    const numberOf10s = Math.floor((remainingAmount % note50) / note10);

    return {
        note100: numberOf100s,
        note50: numberOf50s,
        note10: numberOf10s,
    };
}

const amountToWithdrawInHundreds = prompt("Enter the amount to be withdrawn in hundreds: ");
const result = calCurrencyNotes(amountToWithdrawInHundreds);

console.log(`Number of 100s: ${result.note100}`);
console.log(`Number of 50s: ${result.note50}`);
console.log(`Number of 10s: ${result.note10}`);
