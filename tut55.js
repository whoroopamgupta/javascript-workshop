//  select element
//  addEventListener()
//  what event, what to do

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    console.log('Hey, you clicked me.');
})

const heading = document.querySelector('h2');

heading.addEventListener('click',function(){
    heading.classList.add('red');
})