import styles from './Users.module.css';
import axios from 'axios';
import defaultUserPhoto from './../../static/img/default-user.jpg';
import React from 'react';

class UsersC extends React.Component {

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

  handleButtonPageClick(pageNumber) {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
    }).then(response => {
      this.props.setUsers(response.data.items);
    })

  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i + 1);
    }

    return (
      <div>
        <h3>Users</h3>
        <div>
          {
            pages.map(page => {
              return <span className={this.props.currentPage === page && styles.selected} onClick={(e) => { this.handleButtonPageClick(page) }}>{page}</span>
            })
          }
        </div>
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
