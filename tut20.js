//  Arrays and for loop


const names = ['anna','susy','bob','john','susan'];

const lastName = 'shakeandbake';

let newArray = [];


//  for loop to iterate over the array


// names.length = 5

for(let i=0;i<names.length;i++){
    console.log(i);
    console.log(names[i]);

    // newArray= []
    // newArray.push('susy')
    // newArray = ['anna','susy','bob','john','susan']

    // newArray.push(names[i]);  
    // console.log(newArray);

   newArray.push(`${names[i]} ${lastName}`);
}

console.log(newArray);
