const temp = 55;

if (temp >= 60 && temp <= 90) {
  console.log('Perfect to be outside');
}


// Exercise

const isGuestOneVegan = true;
const isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Both are vegan so just show them vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('One of the guests are vegan');
} else {
  console.log('None are vegan');
}
