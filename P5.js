"use strict";
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
let age = 10;
if (age >= 18) {
    console.log("Number is eligible to vote");
}
else if (age < 18 && age > 0) {
    console.log("Person is not eligible to vote as he is less then 18 years old");
}
else if (age <= 0) {
    console.log("Enter a valid age");
}
