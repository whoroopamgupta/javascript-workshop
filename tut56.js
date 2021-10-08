//  select element
//  addEventListener()
//  what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

// btn.addEventListener('click',function(){
//     console.log('Hey, you clicked me.');
// })

// const heading = document.querySelector('h2');

// heading.addEventListener('click',function(){
//     heading.classList.add('red');
// })

// function changeColors(){
//     console.log('Hello');
// }

// btn.addEventListener('click',changeColors);


function changeColors(){
    let hasClass = heading.classList.contains('red');

    if(hasClass){
        heading.classList.remove('red')
    }
    else{
        heading.classList.add('red')
    }
}

btn.addEventListener('click',changeColors);