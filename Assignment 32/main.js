"use strict";
// Checking Usernames.
// Our current users array
let current_users = ["Imran", "Owais", "Ashir", "Farhan", "Aqib"];
// Our new users array.
let new_users = ["Umar", "Owais", "Ubaid", "Farhan", "Abdullah"];
// loop through new_users  to check for username availibility.
new_users.forEach(new_one_users => {
    // making a condition for username already exist and save in our_condition variable. 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLocaleLowerCase());
    // Print the msg through if_else condition.
    if (our_condition) {
        console.log(`Sorry ${new_one_users} is already taken.`);
    }
    else {
        console.log(`This username ${new_one_users} is available.`);
    }
});
