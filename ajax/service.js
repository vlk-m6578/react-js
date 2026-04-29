// function getApis(pageNumber) {
//   const promise = $.ajax(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=3`)
//   return promise;
// }

function getDogImage() {
  const promise = axios.get("https://dog.ceo/api/breeds/image/random");
  return promise.then(response => {
    return response.data;
  })
}

function getJoke() {
  const promise = axios.get("https://official-joke-api.appspot.com/random_joke");
  return promise.then(response => {
    return response.data;
  })
}
