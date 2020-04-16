var username = 'sammy_shark';
var empty = null;
console.log(username);

var age = 26;
var age = 10; //Se reasignado valor de variable
console.log('age: ', age);

if(username === 'sammy_shark'){
    let rename = 'Martin';
    console.log(true);
}else{
    console.log('No definido o no cumple con el valor esperado');
}

//var function scope | hoisting | reasigned | redeclared
//let block scope | not hoisting | reasigned | no redeclared
//const block scope | not hoisting | no reasigned | no redeclared

var species = 'human';

function transform(){
    //initialice a local, function-scope modific
    var species = 'werewolf';
    console.log(species);
}
console.log(species);
transform();

//
var fullMoone = true;
let species2 = 'human'

if(fullMoone){
    //Initialize a block-scope variable
    let species2 = 'werewolf';
    console.log(`It is a full moon, is currently  a ${species2}.`);
}
console.log(`It is not a full moon, is currently  a ${species2}.`);

//
var x = 100;

function hoist(){
    if(false){
        var x = 200;
    }
    console.log(x);
}

hoist();// devuelve undefined, nunca reasigna la variable global

//
let y = true;

function hoist2(){
    if(3 === 4){
        let y = false;
    }
    console.log(y);
}

hoist2();// devuelve true, 'Y' se vuelve una variable global que puede ser utilizada

//
//const species3; //No se puede declarar sin asignar valor
const species3 = 'human';
//species3 = 'werewolf';//no se puede reasignar
console.log(species3);

//
const car = {
    color: 'yellow',
    price: 50000
};

car.price = 20000;

console.log(car);//Como objeto si se puede mutar sus propiedades