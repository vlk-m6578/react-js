function getApis(pageNumber, successCallbacks) {
  $.ajax(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=3`, {
    success: successCallbacks
  })

  // $.ajax("https://dog.ceo/api/breeds/image/random", {
  //   success: successCallbacks[1]
  // })

  // $.ajax("https://official-joke-api.appspot.com/random_joke", {
  //   success: successCallbacks[2]
  // })

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
})