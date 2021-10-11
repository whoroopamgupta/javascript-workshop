//  event object argument - e,evt
//  info about triggered event
//  event.type
//  event.currentTarget
//  this keyword
//  preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn')

heading.addEventListener('click',function(event){
    // console.log(event);
    console.log(event.currentTarget);
    console.log(this);
})


heading.addEventListener('click',event =>{
    console.log(event.currentTarget);
    console.log(this);
})



btn.addEventListener('click',function(event){
    console.log(event.currentTarget);
})

btn.addEventListener('click',function(event){
    event.currentTarget.classList.add('blue');
    console.log(event.type);
})



const link = document.getElementById('link');

function someFunc(e){
    e.preventDefault();
}

link.addEventListener('click',someFunc)