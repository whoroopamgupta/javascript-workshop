//  currentTarget
//  target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // console.log(e.currentTarget);
        // e.currentTarget.style.color= 'green';
        console.log('current Target', e.currentTarget);
        console.log('target', e.target);
        e.target.style.color = 'green';
    })
})