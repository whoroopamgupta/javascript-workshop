//  allows select dynamic elements

//  event propagation - order the events are fired. 
//  event bubbling - clicked elements first then bubbles up default
//  event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
    console.log('current Target', e.currentTarget);
    console.log('target', e.target);
    if(e.target.classList.contains('link')){
        console.log('You clicked on this link');
    }
}

function stopPropagation(e){
    e.stopPropagation();
    console.log('You clicked on this list.');
}

// list.addEventListener('click',stopPropagation)
container.addEventListener('click',showBubbling,{capture:true})
list.addEventListener('click',showBubbling,{capture:true})
document.addEventListener('click',showBubbling,{capture:true})
window.addEventListener('click',showBubbling,{capture:true})