import './style.css';
import {
  addTask,
  editTask,
  removeAllChecked,
} from './handleTask.js';
import changeState from './state.js';

const listContents = document.querySelector('.listContents');
const refresh = document.getElementById('refresh');
const submit = document.querySelector('.submit');
const formData = document.getElementById('text');
const clean = document.getElementById('clean');
const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

clean.addEventListener('click', () => {
  removeAllChecked();
});

refresh.addEventListener('click', () => {
  document.location.reload();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const data = formData.value;
  addTask(data);
});

const list = document.createElement('ul');
tasks.forEach((element) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  const p = document.createElement('p');
  const i = document.createElement('i');
  const label = document.createElement('label');

  li.setAttribute('id', element.index);
  li.classList.add('item');
  checkBox.type = 'checkbox';
  checkBox.id = 'scales';
  checkBox.addEventListener('change', () => {
    changeState(element.index);
  });

  p.classList.add('paragraph');
  label.for = 'scales';
  label.id = 'label';
  label.innerHTML = element.description;
  if (element.completed) {
    label.style.textDecoration = 'line-through';
    label.style.color = 'rgb(124, 123, 123)';
    checkBox.checked = true;
  }

  i.classList.add('fa-solid', 'fa-info');
  i.addEventListener('click', () => {
    editTask(element.index);
  });

  p.append(checkBox, label);
  li.append(p, i);
  li.classList.add('task');

  list.append(li);
});

listContents.appendChild(list);