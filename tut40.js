//  select the element or group of elements that we want
//  decide the effect that we want to apply to the selection

// getElementByClassName('className');
// node-list - array like object
// index, length property but not methods


const listItems = document.getElementsByClassName('special');
console.log(listItems);

listItems[1].style.color= 'orange';