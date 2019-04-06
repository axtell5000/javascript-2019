const todos = ['read', 'cook dinner', 'break dance', 'keeping it real', 'sleeping'];

todos.splice(2, 1);
todos.push('running');
todos.shift();

// console.log(`My todo list is ${todos.length} items long`);
//
// console.log(`The first item is: "${todos[0]}". The second last item is: "${todos[todos.length-2]}"`);

console.log(todos);
