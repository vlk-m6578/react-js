const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);
const pageNumber = document.querySelector("#page-number");

setTimeout(function () { }, 1000);
clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
  $.ajax(`https://api.artic.edu/api/v1/artworks?page=${pageNumber.value}&limit=3`, {
    success: function (data) {
      data.data.forEach(el => {
        const a = document.createElement('a');
        a.href = el.api_link
        a.innerHTML = 'api ' + el.id;
        document.querySelector('body').insertAdjacentElement("beforebegin", a);
      })
    }
  });
}

$.ajax("https://dog.ceo/api/breeds/image/random", {
  success: function (data) {
    const img = document.createElement('img');
    img.src = data.message;
    img.className = 'dog-image';
    document.querySelector('body').appendChild(img);
  }
})

$.ajax("https://official-joke-api.appspot.com/random_joke", {
  success: function (data) {
    const h1 = document.createElement('h1');
    h1.innerHTML = data.setup;
    const p = document.createElement('p');
    p.innerHTML = data.punchline + 'type:' + data.type;
    document.querySelector('body').prepend(h1, p)
  }
});
