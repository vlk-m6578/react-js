const resultBlock = document.querySelector("#tasks-result");
const clickMeButton = document.querySelector("#click-me");
const textInput = document.querySelector("#input-text");
const getTasksButton = document.querySelector("#get-tasks");

clickMeButton.addEventListener("click", () => {
  // const promise = getApis(pageNumber.value);
  // promise.then(onApisReceived);

  const promise2 = getDogImage();
  promise2.then(onRandomDogReceived);

  const promise = getJoke();
  promise.then(onRandomJokeReceived);

});

getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

createTask("learn React").then((data) => {
  debugger;
  console.log(data)
})

function onTasksReceived(data) {
  data.results.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = el.content;
    resultBlock.appendChild(li);
  })
}

// function onApisReceived(data) {
//   data.data.forEach(el => {
//     const a = document.createElement('a');
//     a.href = el.api_link
//     a.innerHTML = 'api ' + el.id;
//     document.querySelector('body').insertAdjacentElement("beforebegin", a);
//   })
// }

function onRandomDogReceived(data) {
  const img = document.createElement('img');
  img.src = data.message;
  img.className = 'dog-image';
  document.querySelector('body').appendChild(img);
}

function onRandomJokeReceived(data) {
  const h1 = document.createElement('h1');
  h1.innerHTML = data.setup;
  const p = document.createElement('p');
  p.innerHTML = data.punchline;
  p.title = "type: " + data.type;
  document.querySelector('body').prepend(h1, p)
}


