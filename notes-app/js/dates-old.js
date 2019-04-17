// SOme vanilla date work

const someDate= new Date('January 1 2001 7:01:01');
console.log(someDate.toString());
const now = new Date(); // current date
const timeStamp = now.getTime();

const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

const dateA = new Date('March 3 2010 8:00:00');
const dateB = new Date();

const myDateA = dateA.getTime();
const myDateB = dateB.getTime();

if (myDateA < myDateB) {
  console.log(dateA.toString());
} else if (myDateB < myDateA) {
  console.log(dateB.toString());
}


console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`); // works like 0 based array, eg December will be 11
console.log(`Day of month: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);


// Working with dates using Momentjs
const now = moment();
console.log(now.toString());
now.minute(1);
now.subtract(1, 'week').subtract(10, 'days');
console.log(now.toString());

console.log(now.format('MMMM Do, YYYY'));
console.log(now.fromNow());
const nowTimestamp = now.valueOf();
console.log(nowTimestamp);
// or reformat timestamp
console.log(moment(nowTimestamp).toString());

const birthday = moment();
birthday.year(1972).month(0).date(1);

console.log(birthday.format('MMM D YYYY'));
