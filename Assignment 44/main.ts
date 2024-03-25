// Sandwiches

function make_sandwiches(...items: string[]){
    console.log (`Making a sandwich with : ${items.join(',')}.`);
}

make_sandwiches("ham","cheese");
make_sandwiches("turkey","Lettuce","tomato");
make_sandwiches("avocado","sprouts","mustard","mayo");