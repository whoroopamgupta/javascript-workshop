//  Template Literals - ES6
//  backtick characters `` - 
//  Interpolation ${} - insert expression{value}

const name = 'peter';
const age = 25;
const sentence = 'Hey it is ' + name + ' and he is ' + age + ' years old';

// console.log(sentence);

const value = `Hey it is ${name} and he is ${age} years old`;
console.log(value);




//  Array Properties and Methods

let names = ['john','bob','barry','suzi','ruby'];

// length
console.log(names.length);
console.log(names[3]);
console.log(names[names.length-1]);

//  concat

const lastNames = ['peter','onion','tomato'];

const allNames = names.concat(lastNames);
console.log(allNames);
console.log(names);


// reverse

console.log(allNames.reverse());


//  unshift - adds to the array in the beginning

allNames.unshift('susy');
allNames.unshift('anna');
allNames.unshift('pooja');
allNames.unshift('nidhi');
console.log(allNames);

// shift - removes the first element


allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);


// push - adds the element at the end of the array.


allNames.push('susy');
allNames.push('anna');
allNames.push('nidhi');
console.log(allNames);


// pop - deletes the element from end of the array

allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);


// splice - mutates the original array

const specificNames = allNames.splice(2,3);
console.log(specificNames);
console.log(allNames);