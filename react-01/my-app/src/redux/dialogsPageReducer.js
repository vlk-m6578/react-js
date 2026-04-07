const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      // state.messages.push(newMessage);
      // state.newMessageText = '';
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      // state.newMessageText = action.newMessage;
      return {
        ...state,
        newMessageText: action.newMessage
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
  }
)

export default dialogsPageReducer;