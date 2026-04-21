import styles from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        { id: 1, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Dzmitry', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' } },
        { id: 2, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Kate', status: 'I am a boss too', location: { country: 'Belarus', city: 'Minsk' } },
        { id: 3, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Milana', status: 'Aboba..', location: { country: 'Ukraine', city: 'Kiev' } },
        { id: 4, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: true, nickname: 'Vova', status: 'Something', location: { country: 'Belarus', city: 'Minsk' } },
        { id: 5, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: false, nickname: 'Ksenia', status: ':))))', location: { country: 'Russia', city: 'Moscow' } },
        { id: 6, photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', followed: false, nickname: 'Artyom', status: 'Hello!!!', location: { country: 'Belarus', city: 'Minsk' } },
      ]
    )
  }

  return (
    <div>
      <h3>Users</h3>
      {
        props.users.map(u =>
          <div>
            <div key={u.id}>
              <img src={u.photoUrl} className={styles.user__photo}></img>
              {
                u.followed ? <button onClick={() => { props.unfollowUser(u.id) }}>Follow</button> : <button onClick={() => { props.followUser(u.id) }}>Unfollow</button>
              }
            </div>
            <div>
              {u.nickname}
              <p>{u.status}</p>
              <div>
                {u.location.country} - {u.location.city}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Users;
