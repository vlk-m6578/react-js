import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
      <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg'></img>
      <div className={styles.post__desc}>
        {props.message}
      </div>
      </div>
      <span>{props.count} likes</span>
    </div>
  );
}

export default Post;