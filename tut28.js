//  variable lookup
// {} - code block

let globalNumber = 5;

function add(num1,num2){
    const globalNumber = 20;
    const result = globalNumber + num1 + num2 ;

    function multiply(){
        const globalNumber = 100;
        const multiplyResult = result * globalNumber;

        console.log(multiplyResult);
    }

    multiply();
    return result;
}

console.log(add(3,4));
console.log(globalNumber);
