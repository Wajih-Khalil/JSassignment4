// CHAPTER 17 - 20


// Answer1
var emptyMDArr = [
    [],
    []
]

//  Answer2 
var multiDimenArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// Answer3 
for (var i = 1; i <= 10; i++) {
    document.write(i + " <br>")
}


// Answer4
var table = +prompt("Please enter table number: ")
var length = +prompt("Please enter length of table: ")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}

// Answer5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}


// Answer6 (a) 
document.write(" <h2>(a) Counting: </h2>< br >")
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")

}

//(b) 
document.write(" <h2>(b) Reverse Counting: </h2>< br > ")
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ")
}


//(c)
document.write(" <h2>(c) Even: </h2>< br >")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ")
}

//(d)

document.write(" <h2>(d) odd: </h2>< br >")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ", ")
}

//(e)
document.write("<h2>(e) Series: </h2>< br >")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "k, ")
}

// Answer7
alert("Welcome to ABC Bakery. What do you want to order Sir/Ma'am? <br>" +inputCart )
var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt(" ")
//using flag
var isFound = false

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry." + inputCart + " is not available in our bakery")
}
// Answer8
var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
var largest = 0;

for (var i = 0; i < A.length; i++) {
    if (largest < A[i]) {
        largest = A[i];
    }
}
console.log("The largest number is: " + largest)


// Answer9
var b = [24, 53, 78, 91, 12]

console.log("Array items: " + b)
b = b.sort().reverse()
console.log("The smallest number is: " + b[b.length - 1])


// Answer10
document.write("<h2>Multiples of 5: </h2><br>")
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ", ")
}

// CHAPTER 21 - 25


// Answer1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

alert("Hello " + firstName + ", " + "Your Full Name is " + firstName + " " + lastName)


// Answer2
var mobile = prompt("Enter your favourite mobile name: ");
document.write("My Favourite Phone is: " + mobile + "<br>");
document.write("Length of string: "mobile.length);

// Answer3
var name = "Pakistani"
alert(name);
document.write("Index of 'n' is " + name.indexOf("n"));


// Answer4
var hw = "Hello WOrld";
alert(hw);
document.write("last Index of 'l' is " + hw.lastIndexOf("l"));


// Answer5
var name = "Pakistnai";
alert(name);
document.write("Character at index of 3 is " + name.charAt("3"));

//Answer6
var name1 = prompt("Enter first name: ")
var namel = prompt("Enter last name: ")
var full_name1 = name1.concat(' ' + namel)

alert("Your Full name is: " + full_name1)


// Answer7
var city = ["hyder", "abad"]
city.splice(0, 1, "islam");
document.write(city[0], city[2]);

// Answer8
var replace = "Ali and Sami are best friends. They play cricket and football together."
replace.split("and").join("&")

// Answer9
var str = "472"
document.write("Value: " + str + "<br>" + "Type: " + typeof (str) + "<br>" + "Value: " + (str = +str) + "<br>" + "Type: "
    + typeof (str),)


// Answer10
var convertCase = prompt("Input any word in small letters", "Your value will be converted into capital letters");
document.write(convertCase.toUpperCase(convertCase))

// Answer11
function titleCase(string) {
    var inPUT = string.toLowerCase().split("");
    for (var i = 0; i < inPUT.length; i++) {
        inPUT[i] = inPUT[i][0].toUpperCase() + inPUT[i].slice(1);
    }
    document.write(inPUT.join(""));
    return inPUT;
}
titleCase(prompt("Write here"));


// Answer12
var dec = prompt('Enter a value with a decimal point: ')
var res = dec.replace('.', "")

document.write("Number: ", dec, "<br> Result: ", res)

// Answer13
var naam = prompt("Enter your name")
naam = naam.toLocaleLowerCase()
var bool = false

for (i = 0; i < naam.length; i++) {
    if (naam.slice(i, i + 1).charCodeAt() == 33 || naam.slice(i, i + 1).charCodeAt() == 44 || naam.slice(i, i + 1).charCodeAt() == 46 || naam.slice(i, i + 1).charCodeAt() == 64) {
        bool = true;
    } else {
        bool = false;
    }
}

if (bool == true) {
    alert("please enter a correct user name")
} else {
    naam
}

// Answer14
var itemAvail = ["cake", "apple pie", "cookie", "chips", "patties"]
var want = prompt("welcome to ABC bakery: What do you want to order sir/mam")
var isFound = false
want = want.toLocaleLowerCase()

for (i = 0; i < itemAvail.length; i++) {

    if (want === itemAvail[i]) {
        alert(want + " is avaliable at index " + i + " in our bakery")
    }
    isFound = true
    break
}

if (isFound === false) {
    alert("we are sorry." + want + " is not avaible in our bakery")
}

// Answer15
var str1 = prompt();
var flag = 0
var count = 0
var chck = +str.slice(0, 1)

if (chck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str1.length; i++) {
        var chkchk = +str1.slice(i, i + 1)
        if (chkchk.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password can not can not begin with number<br>" +"Please enter a valid password")
} else {
    console.log("Password is valid")
}


// Answer16
var university = "University of Karachi";
var univ = university.split("");

for (i = 0; i < univ.length; i++) {
    document.write(univ[i], "<br>");
}


// Answer17
var inPut = prompt();
var LastInput = inPut.slice(inPut.length - 1)

document.write("User input: " inPut + "<br>" + "Last character of input: " + LastInput)

// Answer18
var txt = "The quick brown fox jumps over the lazy dog"
var f_lag = 0
var chec = "the "
var txtcheck = txt.toLocaleLowerCase()

for (i = 0; i < txtcheck.length; i++) {
    dd = txtcheck.slice(i, (chec.length) + i)

    if (chec == dd) {
        f_lag++
    }
}

document.write(txt + "<br>" + "There are " + f_lag + " occurrence(s) of word 'the'")
