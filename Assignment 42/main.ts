// 
let show_magicians = (magicians : String[]) => {
    magicians.forEach(magician => {
        console.log(magician)
    } );
}
let magicians : String[] = ["Alex","John","Micheal"];
//show_magicians(magicians);

let make_great = (magicians : String[]) => {
    for (let i = 0; i < magicians.length; i++){
        magicians[i] =  " the Great" + magicians[i];
    }
}
make_great(magicians); // Modifies the original array

show_magicians(magicians)// Shows modified names
