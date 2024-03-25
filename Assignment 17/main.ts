// changing  Guest list
let my_guests = ["Umar ali","Arsalan","Hamza","Zubair"];
// remove guest name
let cantCome = my_guests[0];
console.log( cantCome,"can't come.");
// Add or remove guests names
my_guests.splice(0, 1, "Abdullah");
// message for a bigger table
console.log("Good news ! we have found a bigger table for dinner.");
// print guest name in the starting index of array.
my_guests.unshift("Ali");

// print guest name in the ending index of array.
my_guests.push("Aqib");

// guest list lenth dividing by 2.
let middleIndex : number =  Math.floor(my_guests.length / 2);

// print guest name in the middle index of array.
my_guests.splice(middleIndex, 0 , "Amir");

//  Print Updated guest list.
console.log("Updated list of our guest!")

// Print guest list with invition of dinner.
my_guests.forEach(my_guest => console.log(` Salam ,${my_guest} would you like to dinner with me?`));

// inform that bigger table not available so i can ivite only two guest.
console.log("Unfortunately, the new dinner table won't arrive on time,so i can invite only two guests.")
// Using while loop to remove the guest into the array until two guest remain.
while(my_guests.length > 2 ) {
    let removedGuest = my_guests.pop();
    console.log(` Sorry, ${removedGuest} I can't invite you to dinner.`);
}

// invitions to the remaining two guest .
console.log("Invition to the remaining two guest.");

my_guests.forEach(lastTwo => console.log (`Luckly ${ lastTwo} you are still invited to dinner.`));

my_guests.pop();
my_guests.pop();

console.log("Empty list", my_guests);
