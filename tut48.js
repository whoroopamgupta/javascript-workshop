// className
// classList


const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);

// second.className = 'colors';  // applied class of colors
// second.className = 'text'; // apllied class of text 

// second.className = 'colors text';


// third.classList.add('colors');
// third.classList.add('text');

third.classList.add('colors', 'text');
// third.classList.remove('text');

let result = third.classList.contains('colors');
// console.log(result);
if(result){
    console.log('Hello world');
}
else{
    console.log('Does not have the class');
}

const classValues = third.classList;
console.log(classValues);