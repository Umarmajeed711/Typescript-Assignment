 // Unchanged magicians 

let show_magicians = (magicians: String[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let make_great = (magicians: string[] ) => {
    let great_magicians: string[] = [];
    for (let i = 0 ; i < magicians.length; i++ ){
        great_magicians.push("The Great" + magicians[i]);
    }
    return great_magicians;
}
let magicians: string[] = ["Alex","John","Micheal"];
let great_magicians: string[] = make_great([...magicians])

console.log("Original magicains:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(great_magicians);
