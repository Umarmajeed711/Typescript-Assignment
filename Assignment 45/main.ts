// Cars

function make_car(manufacturer : string, model :string , ...options : any[]) {
        let car = {manufacturer,model};
        options.forEach(([key,value]) => car[key] = value);
        return car;
}
console.log(make_car("Toyota","Corolla",["color","Black"],
 ["year",2022]));
console.log(make_car("Ford","Fiesta",["color","Blue"],
 ["sunroof", true ]));