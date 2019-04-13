let todos = getSavedTodos();


const filters = {
  searchText: '',
  hideCompleted: false
};

renderTodos(todos, filters); // initial run



// ps.forEach((p, index) => {
//   if (p.textContent.includes('the')) {
//     p.remove();
//   }
// });


// listen for changes in input field, use the input to filter the todos array
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    todo: e.target.elements.newTodo.value,
    completed: false
  });
  e.target.elements.newTodo.value = '';
  saveTodos(todos);
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
