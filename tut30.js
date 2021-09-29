//  Powerful Array Methods
//  forEach, map, filter, find, reduce
//  iterate over arrays - no for loop required
//  accept callback functions as an argument, call callback against item in a array.


//  forEach - does not return new array

const people = [
    {name : 'bob',age:20,position:'developer'},
    {name : 'peter',age:25,position:'designer'},
    {name : 'susy',age:30,position:'the boss'},
]

// function showPerson(person){
//     console.log(person);
//     console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);


// or

people.forEach(function (item){
    if(item.position === 'developer')
    console.log(item.position.toUpperCase());
})

