import './style.css';

const listContents = document.querySelector('.listContents');

const data = [
  {
    description: 'ghislain Developer',
    completed: true,
    index: 0,
  },
  {
    description: 'Mitahi hacker',
    completed: true,
    index: 1,
  },
  {
    description: 'zazu security',
    completed: true,
    index: 2,
  },
];

const list = document.createElement('ul');
data.forEach((element) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  const p = document.createElement('p');
  const i = document.createElement('i');
  const label = document.createElement('label');

  checkBox.type = 'checkbox';
  checkBox.id = 'scales';
  checkBox.name = 'scales';
  checkBox.checked = false;

  p.classList.add('paragraph');
  label.for = 'scales';
  label.innerHTML = element.description;

  i.classList.add('fa-solid', 'fa-info');

  p.appendChild(checkBox);
  p.appendChild(label);
  li.appendChild(p);
  li.appendChild(i);
  li.classList.add('task');

  list.appendChild(li);
});

listContents.appendChild(list);