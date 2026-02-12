
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', count: 0 },
      { id: 2, message: 'This is my first project.', count: 63 },
      { id: 3, message: 'Happy birthday to me!!!!', count: 127 }
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dzmitry' },
      { id: 2, name: 'Kate' },
      { id: 3, name: 'Milana' },
      { id: 4, name: 'Vova' }
    ],
    messages: [
      { id: 1, message: 'Hello bro!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Wow!' },
      { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!' }
    ]
  },
  sidebar: {

  }
}

// нарушение чистой функции -> state глобальный
export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 5,
    message: postMessage,
    count: 0
  };
  state.profilePage.posts.push(newPost);
}

// H/W

// добавить friends в sidebar
// сверстать на странице Messages аватарки у людей и аватарки у сообщений 

export default state;