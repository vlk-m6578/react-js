const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalCount}

    default:
      return state;
  }
}

export const followUserActionCreator = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowUserActionCreator = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export default usersPageReducer;