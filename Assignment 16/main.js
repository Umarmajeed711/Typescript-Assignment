"use strict";
// changing  Guest list
let my_guests = ["Umar ali", "Arsalan", "Hamza", "Zubair"];
// remove guest name
let cantCome = my_guests[0];
console.log(cantCome, "can't come.");
// Add or remove guests names
my_guests.splice(0, 1, "Abdullah");
// message for a bigger table
console.log("Good news ! we have found a bigger table for dinner.");
// print guest name in the starting index of array.
my_guests.unshift("Ali");
// print guest name in the ending index of array.
my_guests.push("Aqib");
// guest list lenth dividing by 2.
let middleIndex = Math.floor(my_guests.length / 2);
// print guest name in the middle index of array.
my_guests.splice(middleIndex, 0, "Amir");
//  Print Updated guest list.
console.log("Updated list of our guest!");
// Print guest list with invition of dinner.
my_guests.forEach(my_guest => console.log(` Salam ,${my_guest} would you like to dinner with me?`));
