//  FUnctions, return, if , array, for loop


const gas = [20,40,100,30];
const food = [10,40,50];


function calculateTotal(arr){

    let total = 0;

    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }

    if(total>100){
        console.log('Whoa! you are spending way too much');
        return total;
    }
    else{
        console.log('you are good, total is less then 100');
        return total;
    }
}


const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200,4000,500,1]);

console.log({
    gas : gasTotal,
    food : foodTotal,
    random : randomTotal,
});