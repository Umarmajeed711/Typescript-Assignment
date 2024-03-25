// Seeing the world
// Making a array of countries & prints in original order.
let visitPlaces = [ "Dubai","Australia","Newzealand","Turkey","Saudia Arab"];

console.log("Original order:", visitPlaces);

// Print the array in Alphabetical order without modifying original order.
console.log("Alphabetical order:", [...visitPlaces].sort());

//  again print the array in its original order.
console.log("Still in original order:", visitPlaces);

// Print the array in reverse order without changing the original order.
console.log("Reverse alphabetical order:", [...visitPlaces].reverse());

//  Again Print the array in its original order
console.log("Still in its original order:",visitPlaces);

// Print the origianl array in reverse order.
console.log("Origianl array in reverse order:",visitPlaces.reverse());

// Again print the original array in reverse order
console.log("Back to original order:", visitPlaces.reverse());

// Now Print the original array in alphabetical order.
console.log("Print the origianal array in alphabetical order:",visitPlaces .sort());

// Again print the original  array in reverse alphabetical order.
console.log("Again print the original array in reverse alphabetical order:",visitPlaces .reverse());