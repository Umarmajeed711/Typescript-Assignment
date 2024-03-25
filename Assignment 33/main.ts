// Ordianl Numbers

// creating the numbers array
let numbers : Number[] = [1,2,3,4,5,6,7,8,9];

// Using foreach method for print the values seperately.
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1 ) {
        suffix = "st";
        
    }else if (number === 2){
        suffix = "nd"
    }else if (number === 3){
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});