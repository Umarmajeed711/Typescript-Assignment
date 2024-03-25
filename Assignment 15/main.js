"use strict";
// changing  Guest list
let my_guests = ["Umar ali", "Arsalan", "Hamza", "Zubair"];
let cantCome = my_guests[0];
console.log(cantCome, "can't come.");
my_guests.splice(0, 1, "Abdullah");
my_guests.forEach(my_guest => console.log(`Salam, ${my_guest} would you like to dinner with me ?`));
