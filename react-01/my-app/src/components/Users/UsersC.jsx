import styles from './Users.module.css';
import axios from 'axios';
import defaultUserPhoto from './../../static/img/default-user.jpg';
import React from 'react';

class UsersC extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users", {
      headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
    }).then(response => {
      this.props.setUsers(response.data.items);
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

  render() {
    return (
      <div>
        <h3>Users</h3>
        {
          this.props.users.map(u =>
            <div>
              <div key={u.id}>
                <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} className={styles.user__photo}></img>
                {
                  u.followed ? <button onClick={() => { this.props.unfollowUser(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.followUser(u.id) }}>Follow</button>
                }
              </div>
              <div>
                {u.name}
                <p>{u.status}</p>
                <div>
                  {"u.location.country"} - {"u.location.city"}
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default UsersC;
