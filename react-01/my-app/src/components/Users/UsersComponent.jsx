import styles from './Users.module.css';
import defaultUserPhoto from './../../static/img/default-user.jpg';

const UsersComponent = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
            return <span className={props.currentPage === page ? styles.selected : ''} onClick={(e) => { props.handleButtonPageClick(page) }}>{page}</span>
          })
        }
      </div>
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

export default UsersComponent;