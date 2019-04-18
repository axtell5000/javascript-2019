
'use strict'

// Retrieve todos from local storage

const getSavedTodos = () => {
  // Working with local storage
  const todosJson = localStorage.getItem('todos');

  try {
    return todosJson ? JSON.parse(todosJson) : [];
  } catch (e) {
    return [];
  }

};

// Saving todos to localstorage

const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos));

const removeTodo = (id) => {
  const todosIndex = todos.findIndex((todo) => {
    return todo.id === id;
  });

  if (todosIndex > -1) {
    todos.splice(todosIndex, 1);
  }
};

// toggling the completed data item via the checkbox
const toggleTodo = (id) => {
  // using find because we are working with object with a known property, can also use findIndex as well
  const todo = todos.find((todo) => {
    return todo.id === id;
  });

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const textEl = document.createElement('span');
  const button = document.createElement('button');

  // A BIG NB - When doing complex DOM work, keep in mind position of code is important
  // e.g below the remove button will be last because its appendedChild code was last so it will appear last in the
  // parent div. The last of the children

  // setup checkbox element
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  todoEl.appendChild(checkbox);

  // setup the todo text
  textEl.textContent = todo.todo;
  todoEl.appendChild(textEl);

  // setup the remove note button
  button.textContent = 'x';
  todoEl.appendChild(button);
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });


  return todoEl;
};

// Summary display

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


// rendering todos

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
    const newPara = generateTodoDOM(todo);
    todoList.appendChild(newPara);
  });

  /* calling the still todo function using the filtered array*/
  calcStillTodo(filteredTodos);
};
