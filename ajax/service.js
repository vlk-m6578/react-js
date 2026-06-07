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

function getApis(page, limit) {
  const promise = axios.get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`);

  return promise.then((response) => {
    return response.data;
  })
}

function getTasks(userId) {
  return axios.get(`https://dummyjson.com/todos/user/${userId}`).then((response) => {
    return response.data;
  })
}

function createTask(todo, completed, userId) {
  return axios.post(`https://dummyjson.com/todos/add`, {
    todo: todo,
    completed: completed,
    userId: userId
  }).then((response) => {
    return response.data;
  })
}

function updateTask(taskId, completed) {
  return axios.put(`https://dummyjson.com/todos/${taskId}`, {
    completed
  }).then((response) => {
    return response.data;
  })
}

function deleteTask(taskId) {
  return axios.delete(`https://dummyjson.com/todos/${taskId}`).then((response) => {
    return response.data;
  })
}