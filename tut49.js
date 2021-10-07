//  createElement('element')
//  createTextNode('text content')
//  element.appendChild(childElement)

//  insertBefore('element','location');


const result = document.querySelector('#result');

const first = document.querySelector('.red');

//  create empty element
const bodyDiv = document.createElement('div');

//  create text Node
const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);

result.appendChild(bodyDiv);

// document.body.insertBefore(bodyDiv,result);


const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue')
result.appendChild(heading)


document.body.insertBefore(heading,result);
console.log(result.children);