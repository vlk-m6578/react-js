import { followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator } from "../../redux/usersPageReducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {dispatch(followUserActionCreator(userId))},
    unfollowUser: (userId) => {dispatch(unfollowUserActionCreator(userId))},
    setUsers: (users) => {dispatch(setUsersActionCreator(users))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);