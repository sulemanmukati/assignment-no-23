
// DATE METHODS
// chapter 31-34
// Q1
var now = new Date();
document.write("<br><br>Current Date and Time: " + now);

//Q2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
alert("Current Month: " + months[currentMonth]);1

//Q3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date().getDay();
alert("Today is: " + days[today].substring(0, 3));

//Q4
var dayOfWeek = new Date().getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.write("<br><br>It's Fun day");
} else {
    document.write("<br><br>Just another weekday");
}

// Q5
var  date = new Date().getDate();
if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Q6
var  minutesSince1970 = Math.floor(Date.now() / 60000);
console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// Q7
var hour = new Date().getHours();
alert(hour < 12 ? "It's AM" : "It's PM");

// Q8
var laterDate = new Date(2020, 11, 31); 
console.log("Later date: " + laterDate);

// Q9
var ramadanStart = new Date(2015, 5, 18); 
var today = new Date();
var difference = today - ramadanStart;
var daysPast = Math.floor(difference / (1000 * 60 * 60 * 24));
alert( daysPast+"Days have passed since 1st Ramadan ,2015: " );

// Q10
var start2015 = new Date(2015, 0, 1);
var secondsSince2015 = Math.floor((Date.now() - start2015) / 1000);
document.write("<br><br>Seconds since the start of 2015: " + secondsSince2015);

// Q11
var currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 1);
alert("current date: "+new Date +"\n 1 hour ago: " + currentDate);

// Q12
var historicalDate = new Date();
historicalDate.setFullYear(historicalDate.getFullYear() - 100);
alert("100 years back, it was " +new Date +"\n" + historicalDate); 

// Q13
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("<br><br>Your age is: "+age+"<br>Your birth year is: " + birthYear);


// Q14
var customerName = "John Doe";
var currentMonth = months[new Date().getMonth()];
var units = 150;
var chargePerUnit = 10.50;
var netAmount = units * chargePerUnit;
var latePaymentSurcharge = 500;

document.write("<br><br><p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + units + "</p>");
document.write("<p>Charges per Unit: " + chargePerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + (netAmount + latePaymentSurcharge).toFixed(2) + "</p>");









//FUNCTION
// chapter 35-38

//Q no: 01
function currDate(currentDate){
    var currentDate = new Date();
    return currentDate;
}
console.log(currDate());

//Q no: 02
function greet(firstname, lastName){
    var fullName = firstname + " " + lastName;
    var greeting = "Hi! " + fullName;
    return greeting;
}
var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");

var message = greet(firstName , lastName);
console.log(message);

//Q no: 03
function sum(firstNum, secondNum){
    var result = firstNum + secondNum;
    return result;
}
var firstNum = +prompt("Enter First Number");
var secondNum = +prompt("Enter Second Number");
var res = sum(firstNum, secondNum);
console.log(res);

//Q no: 04
function calc(num1,opr,num2){
    if(opr === "+"){
        var res = num1 + num2;
    }
    else if(opr === "-"){
        var res = num1 - num2;
    }
    else if(opr === "*"){
        var res = num1 * num2;
    }
    else if(opr === "/"){
        var res = num1 / num2;
    }
    return res;
}
var num1 = +prompt("Enter First Number");
var opr = prompt("Enter Operator");
var num2 = +prompt("Enter Second Number");
var result = calc(num1,opr,num2);
console.log(result);

// Q no: 05
function square(number) {
    return number * number;
}
var number = +prompt("Enter a number to find its square")
var result = square(number);
console.log(result);

//Q no: 06
function factorialIterative(number) {
    var result = 1;
    for (var i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
var number = +prompt("Enter any Number")
var result = factorialIterative(number);
console.log(result);

//Q no: 08
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;

    return hypotenuseSquare;
}

var base = +prompt("Enter Base");
var perpendicular = +prompt("Enter Perpendicular");
var result = calculateHypotenuse(base, perpendicular);

console.log("Hypotenuse Square:", result);

//Q no: 09

function calculateRectangleAreaByValues(width, height) {
    return width * height;
}
var area1 = calculateRectangleAreaByValues(5, 10);
console.log("Area 1:", area1);

function calculateRectangleAreaByVariables(width, height) {
    return width * height;
}
var rectWidth = +prompt("Enter Rectangle Width");
var rectHeight = +prompt("Enter Rectangle Height");
var area2 = calculateRectangleAreaByVariables(rectWidth, rectHeight);
console.log("Area 2:", area2);

//Q no: 11

function capitalizeWords(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
var inputString = 'the quick brown fox';
var capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString);

//Q no: 12
function longWord(str){
    var word = str.slice(4,14);
    return word
}
var str = "Web Development Tutorial"
var res = longWord(str);
console.log(res);

//Q no: 13
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

var inputString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrences = countOccurrences(inputString, letterToCount);
console.log("Number of occurrences of '" + letterToCount + "': " + occurrences);












// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS
// chapter 38 - 42

// Q1
function power(a, b) {
    return Math.pow(a, b);
}

// Q2
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Q3
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Q4
function calculateAverage(marks) {
    return marks.reduce((a, b) => a + b, 0) / marks.length;
}

function calculatePercentage(marks, totalPossibleMarks) {
    var totalObtained = marks.reduce((a, b) => a + b, 0);
    return (totalObtained / totalPossibleMarks) * 100;
}

function mainFunction(marks1, marks2, marks3) {
    var marks = [marks1, marks2, marks3];
    var average = calculateAverage(marks);
    var percentage = calculatePercentage(marks, 300);
    console.log(`Average: ${average}, Percentage: ${percentage}%`);
}

// Q5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// Q6
function deleteVowels(sentence) {
    return sentence.replace(/[aeiou]/gi, '');
}

// Q7
function countSuccessiveVowels(text) {
    const vowels = "aeiou";
    var count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i].toLowerCase()) && vowels.includes(text[i + 1].toLowerCase())) {
            count++;
        }
    }
    return count;
}

// Q8
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

// Q9
function calculateOvertime(hoursWorked) {
    var overtimeHours = hoursWorked - 40;
    if (overtimeHours > 0) {
        return overtimeHours * 12;
    }
    return 0;
}

// Q10
function distributeCurrency(amount) {
    var hundreds = Math.floor(amount / 100);
    var fifties = Math.floor((amount % 100) / 50);
    var tens = Math.floor(((amount % 100) % 50) / 10);
    console.log(`100s: ${hundreds}, 50s: ${fifties}, 10s: ${tens}`);
}









// chapter 31 - 34 (Date &amp; Time)
// Q1
var dObj = new Date();
// Q2
var dStr = new Date().toString();
// Q3
var d = new Date(); 
var day = d.getDay(); 

// Q4
var d = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayIndex = d.getDay();
alert("Today is " + dayNames[dayIndex]);

// Q5
var currentDate = new Date();
var year = currentDate.getFullYear(); 
var month = currentDate.getMonth();           
var date = currentDate.getDate();             
var dayOfWeek = currentDate.getDay();         
var hour = currentDate.getHours();           
var minute = currentDate.getMinutes();        
var second = currentDate.getSeconds();       
var millisecond = currentDate.getMilliseconds(); 
document.write("Date and Time",year,"-",month+1,"-",date,"&nbsp;&nbsp;",hour,":",minute,":",second,":",millisecond,"&nbsp;&nbsp;Day of week: ", dayNames[dayOfWeek])

// Q6
var laterDate = new Date(2020, 11, 31)
console.log(laterDate)

// Q7
var secondDaySecondMonth1992 = new Date(1992, 1, 2);
console.log(secondDaySecondMonth1992)

// Q8
alert(new Date() - new Date('1980-01-01T00:00:00Z'));

// Q9
var date = new Date();  
date.setFullYear(1990);

// Q10
function setMonthToJanuary(date) {
    date.setMonth(0); 
}

// Q11

// Q12
function changeMinutes(date) {
    var newMinutes = prompt("Enter the new minutes:");
    date.setMinutes(newMinutes);
}

// Q13
function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
}

// Q14
function calculateAge(dob) {
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


// Chapter 35 - 37 (Functions)
// Q1
function displayAlert() {}
// Q2
function askName() {
    var userName = prompt("Enter name");
}
// Q3
function callTwoFunctions(func1, func2) {
    func1();
    func2();
}

// Q4
function promptAndAlertName() {
    var name = prompt("Enter name");
    alert(name);
}

// Q5
function concat(a, b, c) {}

// Q6
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
}

// Q7
function multiplyThree(a, b, c) {
    var product = a * b * c;
}

// Q8
function calculateAverage(numbers) {
    var total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

// Q9
function sum(a, b) {
    return a + b;
}

// Q10
function calculateAverage(numbers) {
    var total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

// Q11
var result = calculateAverage([1, 2, 3, 4]);

// Q12
function letterCount(word) {
    return word.length;
}

// Q13
function setYear(date, year) {
    date.setFullYear(year);
}

// Q14

// Q15
function checkPresence(array, word) {
    return array.includes(word);
}

// Q16
function repeatLetter(letter) {
    return letter.repeat(10);
}

// Q17
function reverseArray(array) {
    return array.reverse();
}



// Chapter 38 (Local vs. Global Variables)
// Q1
function showLocalExample() {
    var localVar = "I am local";
    console.log(localVar);
}

// Q2
var globalVar = "I am global";

function accessGlobal() {
    console.log(globalVar);  // Directly access global variable
}

// Chapter 39, 40 (Switch Statements)
// Q1
function checkValue(value) {
    switch(value) {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        default:
            console.log("Other value");
    }
}

// Q2
function checkCityName(cityName) {
    switch(cityName) {
        case "New York":
}
}