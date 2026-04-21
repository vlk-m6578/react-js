const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: []
}

let usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }
    default:
      return state;
  }
}

export const followUserActionCreator = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowUserActionCreator = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersPageReducer;