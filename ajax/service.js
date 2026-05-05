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

const myToken = '87e12c770e3f25918b9794c35a2c4853d3afdf1e';

function getTasks() {
  const promise = axios.get("https://api.todoist.com/api/v1/tasks", {
    params: {
      since: "2025-02-01T00:00:00Z",
      until: "2025-02-28T23:59:59Z"
    },
    headers: {
      "Authorization": `Bearer ${myToken}`
    }
  });
  return promise.then((response) => {
    return response.data;
  })
}

function createTask(title) {
  const promise = axios.post("https://api.todoist.com/api/v1/tasks/quick", {
    text: title,
    reminder: "friday",
    meta: true
  },
    {
      headers: {
        "Authorization": `Bearer ${myToken}`
      }
    })
  return promise.then((response) => {
    return response.data;
  })
}
