// Mavzu: setInterval, setTimeout, Date

// setTimeout
// setTimeout(funksiya, vaqt) // ms
console.log("Hello!");
setTimeout(() => console.log("5 sek keyin"), 5000);
console.log("After!");

// setInterval
// setInterval(funksiya, vaqt) // ms
let i = 0;

const timer = setInterval(() => {
    console.log(i++);
    if(i == 5){
        clearInterval(timer)
    }
}, 2000);

console.log("After!");

//////////
// Date //
//////////
// new Date(yil, oy, kun)
const date = new Date();
const yerterday = new Date(2025,2,9);
console.log(yerterday.getDay());

// console.log(date.getFullYear()); // yil
// console.log(date.getMonth()); // oy
// console.log(date.getDate()); // sana
// console.log(date.getHours()); // soat
// console.log(date.getMinutes()); // minut
// console.log(date.getSeconds()); // sek

// console.log(date.getDay());

const year = document.getElementById("year");
year.textContent = new Date().getSeconds()



















