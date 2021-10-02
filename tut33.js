//  find
//  returns a single array - {in this case object}
//  returns first match, if no match undefined
//  great for getting uniques values


const people = [
    {name : 'bob',age:20,position:'developer', id :1},
    {name : 'peter',age:25,position:'designer', id :2},
    {name : 'susy',age:30,position:'the boss', id :2},
    {name : 'anna',age:35,position:'the boss', id :4},
];

const names = ['bob','peter','susy']

const person = people.find(function(person){
    return person.id === 2;
})

console.log(person);

// console.log(person.name);

// console.log(
//     names.find(function(name){
//         return name === 'bob'
//     })
// );

const person2 = people.filter(function(person){
    return person.id === 2;
})

console.log(person2);