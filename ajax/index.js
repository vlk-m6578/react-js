const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const textInput = document.querySelector("#input-text");

clickMeButton.addEventListener("click", () => {
  // const promise = getApis(pageNumber.value);
  // promise.then(onApisReceived);

  const promise2 = getDogImage();
  promise2.then(onRandomDogReceived);

  const promise = getJoke();
  promise.then(onRandomJokeReceived);
});

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


