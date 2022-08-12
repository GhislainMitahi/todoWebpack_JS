export const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

export default class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

export const addTask = (description) => {
  const task = new Task(description, tasks.length + 1);
  const newTasks = [...tasks, task];
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  document.location.reload();
};

const removeTask = (index) => {
  const newTasks = tasks.filter((task) => task.index !== index);
  newTasks.map((tasks, index) => {
    tasks.index = index + 1;
    return tasks;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  document.location.reload();
};

export const removeAllChecked = () => {
  let updatedTasks = tasks.filter((task) => task.completed !== true);
  updatedTasks = updatedTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  document.location.reload();
};

const updateTask = (index, inputEdit) => {
  const newTasks = tasks.filter((item) => item.index !== index);

  const newTask = new Task(inputEdit.value, index);
  newTasks.splice(index - 1, 0, { ...newTask });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  document.location.reload();
};

export const editTask = (index) => {
  const task = tasks[index - 1];
  const element = document.getElementById(index);
  element.style.backgroundColor = 'rgb(244, 243, 243)';
  element.innerHTML = '';
  const inputEdit = document.createElement('input');
  inputEdit.classList.add('inputEdit');
  inputEdit.value = task.description;

  inputEdit.addEventListener('focusout', () => {
    updateTask(index, inputEdit);
  });

  const menuOk = document.createElement('i');
  menuOk.classList.add('fas');
  menuOk.classList.add('fa-trash');
  menuOk.classList.add('menuOk');
  menuOk.addEventListener('click', () => {
    removeTask(index);
  });

  element.append(inputEdit, menuOk);
};