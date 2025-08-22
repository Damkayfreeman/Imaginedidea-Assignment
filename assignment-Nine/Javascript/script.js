// Declare Name and Age...

let my_name = "Damilola"; // Replace with actual name 
let age = "40"; // Replace with actual age 

console.log(my_name);
console.log(age);

// Declare Variables....

// Using Const for values that is won't change 
const full_name = "Abdul Damilola"
const favorite_city = "Baltimore MD"

console.log(full_name); // Fullname
console.log(favorite_city); // Favoritecity

// Using let  for values that might change
let Age = 28; // age
let isStudent = true; // whether you are a student (true/false)

console.log(age);
console.log(isStudent);

// String Concatenation vs Template Literals..

// Declare variable for name and city
 const name = "Abdul";
 const city = "Abuja"

 // Using String Concatenation

 console.log("My name is " + name + " and I live in " + city +".");

// Using Templates Literals

console.log(`My name is ${name} and I live in ${city}.`);

//Primitive types...Assignment- 4

// String type
let myname = "Jarule";
// Number type
let myage = 50;
// Boolean type
let isClass = true; 
// Undefined type
let address;
// Null type
let school = null;

console.log(typeof myname);// string
console.log(typeof myage);// number
console.log(typeof isClass);// Boolean
console.log(typeof address);// Undefined
console.log(typeof school); // Null

//Assignment 5 – Create an Object

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2009,
  color: "red"
};

// Log the entire object
console.log(car);

// Accessing values using dot notation
console.log("Brand:", car.brand);

// Accessing values using bracket notation
console.log("Model:", car["model"]);

//Assignment 6 – Modify an Object

// Add a new property: engine
car.engine = "V6";
console.log(car.engine);

// Change the value of color
car.color = "Blue";
console.log(car.color);

// Delete the year property
delete car.year;

// Print the updated object
console.log(car);

//Assignment 7 – Nested Objects




