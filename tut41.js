//  select the element or group of elements that we want
//  decide the effect that we want to apply to the selection

//  querySelector('any css') - selects single
//  querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor= 'blue';

const item = document.querySelector('.special');
// console.log(item);

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = 'yellow'
})