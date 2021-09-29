// Primitive data types
// Strings, Numbers, Symbol, Boolean, Undefined, Null.

//  Arrays, Functions, Objects
// typeof


// when assigning primitive data types value to a variable, any changes are made directly to that values, woithout affecting original value

// when assigning non-primitive data type value to a variable is done by reference to any changes will affect all the references


let number = 1;
let number2 = number;
number2 = 7;

// number = 4;



console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);


// 

let person = {name : 'bob'};
// console.log(person);

// let person2 = person;

// person.name = 'susy';

let person2 = {...person};
person2.name='roopam';

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);