const tasks = [
  { title: 'Learn JavaScript', isDone: true },
  { title: 'Learn React', isDone: true },
  { title: 'Learn Go', isDone: false }
]

const root = document.getElementById('root');

const headerEl = document.createElement('h1');
headerEl.append('To-Do List');
root.append(headerEl);

const listEl = document.createElement('ul');

tasks.forEach(task => {
  const itemEl = document.createElement('li');
  const titleEl = document.createElement('div');
  titleEl.append(task.title);
  itemEl.append(titleEl);

  const inputEl = document.createElement('input');
  inputEl.type = 'checkbox';
  inputEl.checked = task.isDone;
  itemEl.append(inputEl);
  
  listEl.append(itemEl);
})

root.append(listEl);
