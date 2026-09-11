const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

// import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', count: 0 },
    { id: 2, message: 'This is my first project.', count: 63 },
    { id: 3, message: 'Happy birthday to me!!!!', count: 127 }
  ],
  newPostText: "aboba",

  profile: null
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        count: 0
      };
      // let stateCopy = {...state};
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = '';
      // return stateCopy;
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      // let stateCopy = {...state};
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE: 
      return {
        ...state, profile: action.profile
      }

    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export default profilePageReducer;

// let profilePageReducer = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     addPost: (state, action) => {
//       const newPost = {
//         id: 5,
//         message: state.newPostText,
//         likesCount: 0
//       }
//       state.posts.push(newPost);
//       state.newPostText = '';
//     },
//     updateNewPostText: (state, action) => {
//       state.newPostText = action.payload;
//     }
//   }
// })

// export default profilePageReducer.reducer;
// export const {addPost, updateNewPostText} = profilePageReducer.actions;
