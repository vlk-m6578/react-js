const resultBlock = document.querySelector("#tasks-result");
const apisBlock = document.querySelector("#apis-result");
const imagesBlock = document.querySelector("#images-result");
const clickMeButton = document.querySelector("#click-me");
const textInput = document.querySelector("#input-text");
const numberInput = document.querySelector("#input-number");
const getTasksButton = document.querySelector("#get-tasks");
const getApisButton = document.querySelector("#get-apis");

clickMeButton.addEventListener("click", () => {
  // const promise = getApis(pageNumber.value);
  // promise.then(onApisReceived);

  imagesBlock.innerHTML = '';

  const promise2 = getDogImage();
  promise2.then(onRandomDogReceived);

  const promise = getJoke();
  promise.then(onRandomJokeReceived);

});

getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

getApisButton.addEventListener("click", () => {
  const promise = getApis(1, numberInput.value);
  promise.then(onApisReceived)
})

createTask("learn React").then((data) => {
  console.log(data)
})

function onTasksReceived(data) {
  data.results.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = el.content;
    resultBlock.appendChild(li);
  })
}

function onApisReceived(data) {
  const array = data.data;
  apisBlock.innerHTML = '';
  array.forEach(el => {
    const div = document.createElement('div');
    div.innerHTML = el.title;
    apisBlock.appendChild(div);
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
  imagesBlock.insertAdjacentElement('beforeend', img);
}

function onRandomJokeReceived(data) {


  const h1 = document.createElement('h1');
  h1.innerHTML = data.setup;
  const p = document.createElement('p');
  p.innerHTML = data.punchline;
  p.title = "type: " + data.type;
  imagesBlock.insertAdjacentElement('afterbegin', p);
  imagesBlock.insertAdjacentElement('afterbegin', h1);
}


