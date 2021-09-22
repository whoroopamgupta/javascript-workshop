//  Arrays
//  Arrays - [], 0 index based

const friend1 = 'rahul';
const friend2 = 'rohan';
const friend3 = 'akshat';
const friend4 = 'rajeev';

// console.log(friend1,friend2);

const friends = ['rahul','rohan','akshat','rajeev','raj','john','peter',45,63,null,undefined];

console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[7]);

const bestFriend = friends[5];
console.log(bestFriend);

friends[3] = 'suzi';
console.log(friends);

friends[1]= "";
console.log(friends);