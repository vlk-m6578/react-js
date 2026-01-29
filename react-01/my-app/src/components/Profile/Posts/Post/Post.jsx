import c from './Post.module.css';

const Post = () => {
  return (
    <div className={c.post}>
      <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg'></img>
      <div className={c.post__desc}>
        post1
      </div>
    </div>
  );
}

export default Post;