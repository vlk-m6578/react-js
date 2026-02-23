import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', count: 0 },
      { id: 2, message: 'This is my first project.', count: 63 },
      { id: 3, message: 'Happy birthday to me!!!!', count: 127 }
    ],
    newPostText: "aboba"
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
    ],
    newMessageText: 'Hello! How are you?'
  },
  sidebar: {

  }
}

window.state = state;

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = (message) => {
  let newMessage = {
    id: 5,
    message: message
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

// нарушение чистой функции -> state глобальный
export let addPost = () => {   
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    count: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

// H/W

// добавить friends в sidebar
// сверстать на странице Messages аватарки у людей и аватарки у сообщений 

export default state;