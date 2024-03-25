"use strict";
// Unchanged magicians 
let show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
};
let make_great = (magicians) => {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("The Great" + magicians[i]);
    }
    return great_magicians;
};
let magicians = ["Alex", "John", "Micheal"];
let great_magicians = make_great([...magicians]);
console.log("Original magicains:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(great_magicians);
