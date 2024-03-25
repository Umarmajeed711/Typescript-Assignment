// More Conditional Test

// Test for equality and enequality with String
let myName : String = " M.Umar " 
console.log(" myName is equal to the M.Umar .");
console.log(myName ==  " M.Umar ");

//enequality
console.log( "myName is not equal to M.Umar .");
console.log( myName != " M.Umar ");

// Test using the lower case function.
let UpperName = " M.UMAR ";
console.log("\n Is UpperName is equal to m.umar after converting to lower case. ");
console.log(UpperName.toLowerCase() == " m.umar ");


console.log("\n Is UpperName is not equal to the m.umar after converting  to lower case.");
console.log(UpperName.toLowerCase() != " m.umar ");

//Numerical tests involving equality and inequality, 
let number = 7 ;
console.log("\n Is number is equal to the 7 .");
console.log(number == 7 );


console.log("\n Is number is not equal to the 7 .")
console.log(number != 7 );

//greater than and less than, 
console.log("\n Is number is greater than 5 .");
console.log(number  > 5 );


console.log("\n Is number is less than 5.");
console.log(number < 5 );

//greater than or equal to :
console.log("\n Is number is greater than & its equal to 5.")
console.log(number >= 5 );


//less than or equal to.
console.log("\n Is number is less than & its equal to 5.");
console.log(number <= 5);

// Test using and & or operators.

// Using "and" operator.
console.log("\n Is number is greater than 5 and not equal to 5. ");
console.log(number > 5 &&  number !=  5 );

console.log("\n Is number is greater than 5 &  equal to 5 .");
console.log( number < 5 && number == 5) ;

// Using "Or" Operator

console.log("\n Is 10 is greater than 20 Or 10 is equal to 10.");
console.log( 10 > 20  || 10 == 10);

console.log("\n Is 10 is greater than 20 or 10 is not equal to 10.");
console.log( 10 > 20 || 10 != 10);

// Test Whether an item is a array.
let Fruits = ["Mango","Apple","Orange"];

// Test whether an item is includes in array.
console.log("\n Is Apple include in my fruit array.");
console.log(Fruits.includes("Apple"));

// Not includes
console.log("\n Is Apple is not include in my fruit array.");
console.log(!Fruits.includes("Apple"));