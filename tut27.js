//  Local Scope
//  cannot be accessed outside the code block


let name = 'bobo';

function calculate(){
    const name = 'john';
    const age = 25;


    becomesGlobal = "global variable";

// code goes here

    console.log(age);
    console.log(name);
}

console.log(name);

calculate();


console.log(name);
// console.log(age);

console.log(becomesGlobal);


if(true){
    const name = 'peter';
}

console.log(`my name is ${name} and I'm awesome`);