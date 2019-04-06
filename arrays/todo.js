const todos = ['read', 'cook dinner', 'break dance', 'keeping it real', 'sleeping'];

todos.splice(2, 1);
todos.push('running');
todos.shift();


// console.log(`The first item is: "${todos[0]}". The second last item is: "${todos[todos.length-2]}"`);

todos.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
});

//Using godd old for loop
for (let i = 0; i < todos.length; i++) {
  console.log(`${i + 1}. ${todos[i]}`);
}


console.log(todos);
