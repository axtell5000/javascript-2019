let todos = [];


const filters = {
  searchText: '',
  hideCompleted: false
};

const calcStillTodo = (filteredTodos) => {
  const span = document.getElementById('todos-left');
  let stillTodoCount = 0;

  filteredTodos.forEach((todo) => {
    if (!todo.completed) {
      stillTodoCount = stillTodoCount + 1;
    }
  });

  span.textContent = stillTodoCount;
};

const renderTodos = (todos, filters) => {
  const todoList = document.querySelector('#todo-list');



  // filtering the array based on the search text
  let filteredTodos = todos.filter((todo) => {
    return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  
  // then filter again
  filteredTodos = filteredTodos.filter((todo) => {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  todoList.innerHTML = ''; // reset area before rendering

  // Here rendering the filtered array
  filteredTodos.forEach(todo => {
    const newPara = document.createElement('p');

    if (todo.todo.length > 0) {
      newPara.textContent = todo.todo;
    } else {
      newPara.textContent = "No proper todo";
      todo.completed = true;
    }

    todoList.appendChild(newPara);
  });

  /* calling the still todo function using the filtered array*/
  calcStillTodo(filteredTodos);
};

// Working with local storage
const todosJson = localStorage.getItem('todos');

if (todosJson !== null) {
  todos = JSON.parse(todosJson);
}


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
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
