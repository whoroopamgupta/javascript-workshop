//  select the element or group of elements that we want
//  decide the effect that we want to apply to the selection

//  childnodes - returns all child nodes including whitespaces which is treated as  a text node   

const result = document.querySelector('#result');

const allChildren = result.childNodes;
console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);