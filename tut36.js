const months = [
    'January',
    'Febraury',
    'March',
    'April',
    'may',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

// current date
// const date = new Date();  

const date = new Date('1/12/2004');

console.log(date);
console.log(date.getDate());

const month = date.getMonth();
console.log(month); // 9 - oct 
console.log(months[month]);

const day = date.getDay();
console.log(day);
console.log(days[day]);

console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML = sentence;