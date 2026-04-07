const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', count: 0 },
    { id: 2, message: 'This is my first project.', count: 63 },
    { id: 3, message: 'Happy birthday to me!!!!', count: 127 }
  ],
  newPostText: "aboba"
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        count: 0
      };
      // state.posts.push(newPost);
      // state.newPostText = '';
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      // state.newPostText = action.newText;
      return {
        ...state,
        newPostText: action.newText   
      };
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profilePageReducer;