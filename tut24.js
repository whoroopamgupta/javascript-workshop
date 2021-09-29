//  Truthy and Falsy
//  "", '', ``, 0, -0, NaN, false, null, undefined -- these are the falsy values

const bool1 = true;
const bool2 = 2>1;

const text = '';

if(text)
{
    console.log('Hey this is truthy');
}
else{
    console.log('hey this is falsy');
}


const number = 0;

if(number){
    console.log('this is trthy');
}
else{
    console.log('this is falsy');
}






// if(true){
//     console.log('hey it works!!');
// }

// if(2>1){
//     console.log("hey it works");
// }

// if(bool1){
//     console.log('hey it works');
// }

// if(bool2){
//     console.log('hey it works');
// }