import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.post__content}>
      <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg'></img>
      <div className={c.post__desc}>
        {props.message}
      </div>
      </div>
      <span>{props.count} likes</span>
    </div>
  );
}

export default Post;