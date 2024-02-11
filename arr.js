"use strict";
//array of objects
const cars=[
{name:"Audi", number:5, color:"black", company:"Volkswagon"},
{name:"Dodge Challenger", number:8, color:"red", company:"Stellantis"},
{name:"Mini cooper", number:22, color:"green", company:"BMW"},
{name:"Rolls Royce", number:15, color:"black", company:"BMW"},
{name:"porsche", number:12, color:"black", company:"Volkswagon"},
];
let carNames=cars.map(theFunction1);
function theFunction1(cars){
	return cars.name
}

let carNo = cars.map(theFunction2);
function theFunction2(cars) {
  return cars.number;
}
let carTotal=carNo.reduce(addFunction);
function addFunction(x,y){
	return x+y;
}

console.log(carNames);//list of car names.
console.log(carNo);//list of car numbers.
console.log(carTotal);//total cars.


