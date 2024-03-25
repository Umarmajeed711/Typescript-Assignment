"use strict";
// Hello Admin
let Admins_name = ["Umar", "Ahmed", "Admin", "Ashar", "Uzair"];
// Using foreach & if else .
Admins_name.forEach(admin_name => {
    if (admin_name === "Admin") {
        console.log(`Hello ${admin_name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${admin_name}, thank you for logging in again.`);
    }
});
