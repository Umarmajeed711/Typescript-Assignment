// No User

// creating the array
let Admins_name : string[] = ["Umar","Ashar","Admin","Ali","Uzair"];

// Remove all the value of array , now  array is empty.
Admins_name = []


// using if an else condition.
if (Admins_name.length === 0 ){
    // Print the msg if the value of array is = 0.
    console.log("We need to find some users!");
    

    // Print the msg if the value of array is not equal to 0.use foreach method.
} else {
    Admins_name.forEach(admin_name =>{
        if(admin_name === "Admin"){
         console.log(`Hello ${admin_name}, would you like to see a status report?`);
        }else{
         console.log(`Hello ${admin_name}, thank you for logging in again.`);
        }
   
})
}
