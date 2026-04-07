import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

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
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;