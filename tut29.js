//  Callback functions, Higher Order Functions
//  Functions as first class obejcts/citizen
//  Functions are first cass objects - stored in a variable(expression), passed as an argument to another functions, return from the function (closure)

//  Higher order functions - accepts another functions as an argument or returns function as a result

//  Callback functions - passed to a another function as an argument and executed inside that function.


// function greetMorning(name){
//     const myName = 'roopam';
//     console.log(`Good Morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name){
//     const myName = 'susan';
//     console.log(`Good Morning ${name}, my name is ${myName}`);
// }

// greetMorning('bobo')
// greetAfternoon('peter')


// function morning(){
//     console.log(`Good Morning Bob`);
//     // return `Good Morning bob`;
// }

// function greet(name,cb){
//     cb()  // morning()
//     const myName = 'john';
//     console.log(`${name}, my name is ${myName}`);
// }

// greet('bob',morning);



function morning(name){
    return `Good Morning ${name.toUpperCase()}`
}

function afternoon(name){
    return `Good Morning ${name.repeat(3)}`
}


function greet(name,cb){
    const myName = 'john';

    console.log(`${cb(name)}, my name is ${myName}`);
}



greet('bobo',morning);
greet('peter',afternoon);