const todos = ['read', 'cook dinner', 'break dance', 'keeping it real', 'sleeping'];

todos.splice(2, 1);
todos.push('running');
todos.shift();


// console.log(`The first item is: "${todos[0]}". The second last item is: "${todos[todos.length-2]}"`);

todos.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
});

console.log(todos);
