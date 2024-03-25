"use strict";
// Large shirts
function make_shirt(size = "Large", message = " I Love Typescript!") {
    console.log(`Making a ${size} T-shirt with the message ${message} printed on it. `);
}
make_shirt(); // Default message
make_shirt("medium"); // Default message ,  medium size.
make_shirt("small", "Coding is life"); //message for small size.
