//  function expression
//  create a variable, assign to function
//  diff - hoisting, using arrow-functions, libraries


//  function definition/ declaration

function addValues(num1,num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(23,64);

console.log(firstValue);
console.log(secondValue);



// function expression

const add = function(num1,num2){
    return num1 + num2;
}

// const thirdValue = add(5,6)
// console.log(thirdValue);

// const values = [firstValue,secondValue,thirdValue]
// console.log(values);

const values = [firstValue, secondValue, add(5,6), add(34,64)];
console.log(values);

console.log(add(6,7));


const multiply = (num1,num2) => num1*num2;
console.log(multiply(4,5));



const multi = (num1,num2) => "Hello World";
console.log(multi(7,5));
console.log(multi(17,15));
console.log(multi(17,15));
console.log(multi(17,15));