// 1inch = 2.54cm

// const wallHeight = 80;

// function calculate(value){
//     console.log('The value in cm is : ' + (value * 2.54));

// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width,height];
// console.log(dimensions);

//  return

const wallHeight = 80;

function calculate(value){
    // console.log('The value in cm is : ' + (value * 2.54));

    return value * 2.54;
    // console.log('hello');
}

const width = calculate(100); // width = 254;
const height = calculate(wallHeight);


const dimensions = [width,height];
console.log(dimensions);
