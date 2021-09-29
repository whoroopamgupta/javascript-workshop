//  GLobal Scope vs Local Scope
// any variable outside code block {} is said to be in the global scope.
//  can be accessed anywhere in the program.
// remeber : modify by mistake.


let name = 'bob';
name = 'peter';
console.log(name);

function calculate(){
    console.log(name);
    name = 'orange';
    console.log(name);

    function inner(){
        name = 'this is inner value';
        console.log(`this is from inner function ${name}`);
    }

    inner();    
}


calculate();

console.log(name);