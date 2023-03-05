"use strict";
console.log("Hello World");
// data types
// numbers
let age = 22;
// string
let firstName = "Kamal";
// array
let numbersArray = ["10", "20", "30", "40"];
// tuples
let person = [1, "Kamal"];
// functions without defined a return type
function calculate() {
    let numbers = [];
    return numbers;
}
// function with desfined return type
function calculateAverageMark(subjectCount, totalMarks) {
    let average = totalMarks / subjectCount;
    return average;
}
let avgMark = calculateAverageMark(5, 420);
console.log("Average Mark : " + avgMark);
// functions with optional parameters
function addNumbers(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(addNumbers(10));
// Objects
let student = {
    id: 1,
    name: "Kamal",
};
// Objects
let teacher = {
    id: 1,
    name: "Kamal",
    enroll: (date) => {
        console.log(date);
    },
};
teacher.enroll(new Date());
let employee1 = {
    id: 1,
    name: "Kamal",
};
let employee2 = {
    id: 2,
    name: "Nimal",
};
// Union Types
function getNumber(myNumber) {
    // Narrowing
    if (typeof myNumber === "string") {
        return parseInt(myNumber);
    }
    return myNumber;
}
getNumber("10");
// Nullable values
function generate(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log("Nothing");
    }
}
generate(undefined);
