import { followUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowUserActionCreator } from "../../redux/usersPageReducer";
import Users from "./Users";
import { connect } from "react-redux";
import axios from 'axios';
import React from 'react';
import UsersComponent from './UsersComponent';

class UsersApiComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
    }).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios.get("https://social-network.samuraijs.com/api/1.0/users", {
  //       headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
  //     }).then(response => {
  //       // debugger;
  //       this.props.setUsers(response.data.items);
  //     })
  //   }
  // }

  handleButtonPageClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
    }).then(response => {
      this.props.setUsers(response.data.items);
    })

  }

  render() {
    return (
      <UsersComponent users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        handleButtonPageClick={this.handleButtonPageClick}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser} />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);