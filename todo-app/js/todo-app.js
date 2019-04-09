const todos = [{
  todo: 'Cleaning room',
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

let stillTodoCount = 0;

const span = document.getElementById('todos-left');

todos.forEach(todo => {
  if (!todo.completed) {
    stillTodoCount = stillTodoCount + 1;
  }

  const newPara = document.createElement('p');
  newPara.textContent = todo.todo;
  document.querySelector('#todo-list').appendChild(newPara);
});

span.textContent = stillTodoCount;

// ps.forEach((p, index) => {
//   if (p.textContent.includes('the')) {
//     p.remove();
//   }
// });

document.querySelector('#add-todo').addEventListener('click', (e) => {
  console.log('Add Todo button clicked');
});
