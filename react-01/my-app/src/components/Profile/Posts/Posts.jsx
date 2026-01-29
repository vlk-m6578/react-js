import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
  return (
    <div className={c.posts}>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;