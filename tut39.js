//  select the element or group of elements that we want
//  decide the effect that we want to apply to the selection

// getElementByTagName('tagname')
// node-list : array-like object
// index, length property, but not array methods

const headings = document.getElementsByTagName('h2');
// console.log(headings);
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
console.log(items.length);
console.log(items);


// cannot use forEach as it is an array-like object and not an Array.
// items.forEach(function(item){
//     console.log(item);
// })

items[2].style.color = 'orange';

const betterItems = [...items];


betterItems.forEach(function(item){
    console.log(item);
})


console.log(items);  // gives a node-list
console.log(betterItems); // gives a staraight-up array.