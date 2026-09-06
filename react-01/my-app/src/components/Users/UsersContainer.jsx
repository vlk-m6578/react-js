import { followUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowUserActionCreator } from "../../redux/usersPageReducer";
import Users from "./Users";
import { connect } from "react-redux";
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => { dispatch(followUserActionCreator(userId)) },
    unfollowUser: (userId) => { dispatch(unfollowUserActionCreator(userId)) },
    setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
    setCurrentPage: (currentPage) => { dispatch(setCurrentPageActionCreator(currentPage)) },
    setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountActionCreator(totalCount)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);