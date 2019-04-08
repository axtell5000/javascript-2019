const todos = [{
  todo: 'CLeaning room',
  completed: false
},{
  todo: 'Mowing lawn',
  completed: false
},{
  todo: 'Read some of book',
  completed: true
},{
  todo: 'Eat breakfast',
  completed: true
},{
  todo: 'Go to store',
  completed: false
}];



const deleteTodo = function (array, todoString) {
  const index = array.findIndex(function (todo, index) {
    return todo.todo.toLowerCase() === todoString.toLowerCase();
  });
  if (index > -1) {
    array.splice(index, 1);
  }

};

deleteTodo(todos, '!!Go to store');
deleteTodo(todos, '!!Mowing lawn');
console.log(todos);

// todos.splice(2, 1);
// todos.push('running');
// todos.shift();
//
//
// // console.log(`The first item is: "${todos[0]}". The second last item is: "${todos[todos.length-2]}"`);
//
// todos.forEach((todo, index) => {
//   console.log(`${index + 1}. ${todo}`);
// });
//
// //Using godd old for loop
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`);
// }
//
//
// console.log(todos);
