const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
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
      newMessageText: ''
    },
    sidebar: {

    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer pattern
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        count: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
  }
)

export default store;
window.store = store;