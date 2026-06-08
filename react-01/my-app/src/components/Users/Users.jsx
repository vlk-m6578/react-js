import styles from './Users.module.css';
import axios from 'axios';
import defaultUserPhoto from './../../static/img/default-user.jpg';

const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users", {
        headers: "5e7dd553-5bf1-4358-a7da-f911b59ef309"
      }).then(response => {
        // debugger;
        props.setUsers(response.data.items);
      })
    }
  }

  // if (props.users.length === 0) {
  //   props.setUsers(
  //     [
  //       { id: 1, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Dzmitry', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' } },
  //       { id: 2, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Kate', status: 'I am a boss too', location: { country: 'Belarus', city: 'Minsk' } },
  //       { id: 3, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Milana', status: 'Aboba..', location: { country: 'Ukraine', city: 'Kiev' } },
  //       { id: 4, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Vova', status: 'Something', location: { country: 'Belarus', city: 'Minsk' } },
  //       { id: 5, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: false, nickname: 'Ksenia', status: ':))))', location: { country: 'Russia', city: 'Moscow' } },
  //       { id: 6, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: false, nickname: 'Artyom', status: 'Hello!!!', location: { country: 'Belarus', city: 'Minsk' } },
  //     ]
  //   )
  // }

  return (
    <div>
      <h3>Users</h3>
      <button onClick={getUsers}>Get users</button>
      {
        props.users.map(u =>
          <div>
            <div key={u.id}>
              <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} className={styles.user__photo}></img>
              {
                u.followed ? <button onClick={() => { props.unfollowUser(u.id) }}>Unfollow</button> : <button onClick={() => { props.followUser(u.id) }}>Follow</button>
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

export default Users;
