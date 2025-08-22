//Assignment 1 – console.log and Comments

// Logs your name and age using console.log

let my_name = "Damilola"; // Replace with actual name 
let age = "40"; // Replace with actual age 

console.log(my_name);
console.log(age);

//Assignment 2 – Declaring Variables

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

// Assignment 3 – String Concatenation vs Template Literals

// Declare variable for name and city
const name = "Abdul";
const city = "Abuja"

// Using String Concatenation

console.log("My name is " + name + " and I live in " + city + ".");

// Using Templates Literals

console.log(`My name is ${name} and I live in ${city}.`);

//Assignment 4 – Primitive Data Types

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

// Create the student object
let student = {
    name: "Odetoye babatunde",
    age: 18,
    subjects: {
        cheistry: 85,
        accounting: 92
    }
};

// Log the student name
console.log(student.name);

// Log One of the subject scores using dot notation
console.log(student.subjects.accounting);


//Assignment 8 – Object Methods

// Create an object
let novel = {
  title: "The History of Tom Jones",
  author: "Henry Fielding",
  year: 1749
};

// Use Object.keys() – returns an array of property keys
console.log(Object.keys(novel)); // i.e it show  the novel-"title", "author", "year"


// Use Object.values() – returns an array of property values
console.log( Object.values(novel)); // i.e to show "Atomic Habits", "James Clear", 2018


// Use Object.entries() – returns an array of [key, value]
console.log(Object.entries(novel)); //i.e o show all entries combined with keys and values


// Use hasOwnProperty() – checks if the object has a specific property
console.log(novel.hasOwnProperty("author")); // True - it define whether the author is listed or not.



//Assignment 9 – Type Checking

// Create a variable and assign a number
let x = 42;
console.log(typeof x); // 42 "number"

// Change the value to a string
x = "Hello World!";
console.log(typeof x); // "Hello World!" "string"

// Change the value to a boolean
author = true;
console.log(typeof author); // true "boolean"




//Assignment 10 – Challenge Task

// Create the object for a favorite book
let Book = {
    title: "Dreams from my Father",
    author: "Barack Obama",
    year: 1995,
    genre: "Memoir",
    ratings: {
        goodreads: 4.2,
        amazon: 4.5,
        barnesAndNoble: 4.3
    }
};

// Log one genre
console.log(Book.genre);

// Log a rating (e.g., Goodreads rating)
console.log(Book.ratings.goodreads);

// Add a new property: language
Book.language = "English";
console.log(Book.language);

// Delete the year property
delete Book.year;







