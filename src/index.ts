console.log("Hello World");

// data types

// numbers
let age: number = 22;

// string
let firstName: string = "Kamal";

// array
let numbersArray: string[] = ["10", "20", "30", "40"];

// tuples
let person: [number, string] = [1, "Kamal"];

// functions without defined a return type
function calculate() {
  let numbers: number[] = [];
  return numbers;
}

// function with desfined return type
function calculateAverageMark(
  subjectCount: number,
  totalMarks: number
): number {
  let average = totalMarks / subjectCount;
  return average;
}
let avgMark = calculateAverageMark(5, 420);
console.log("Average Mark : " + avgMark);

// functions with optional parameters
function addNumbers(firstNumber: number, secondNumber?: number): number {
  if (secondNumber) {
    return firstNumber + secondNumber;
  }
  return firstNumber;
}
console.log(addNumbers(10));

// Objects
let student: { id: number; name: string; age?: number } = {
  id: 1,
  name: "Kamal",
};

// Objects
let teacher: { id: number; name: string; enroll: (date: Date) => void } = {
  id: 1,
  name: "Kamal",
  enroll: (date: Date) => {
    console.log(date);
  },
};

teacher.enroll(new Date());

// type aliases

type Employee = {
  id: number;
  name: string;
};

let employee1: Employee = {
  id: 1,
  name: "Kamal",
};

let employee2: Employee = {
  id: 2,
  name: "Nimal",
};

// Union Types
function getNumber(myNumber: number | string): number {
  // Narrowing
  if (typeof myNumber === "string") {
    return parseInt(myNumber);
  }
  return myNumber;
}
getNumber("10");

// Nullable values
function generate(name: string | null | undefined) {
  if (name) {
    console.log(name);
  } else {
    console.log("Nothing");
  }
}
generate(undefined);
