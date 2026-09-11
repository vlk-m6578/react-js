import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profilePageReducer";
import ComponentWithRouter from "../WithRouter/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
      headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
    }).then(response => {
      debugger;
      this.props.setUserProfile(response.data);
    })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}

let connectedProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileContainer);


export default ComponentWithRouter(connectedProfileContainer);