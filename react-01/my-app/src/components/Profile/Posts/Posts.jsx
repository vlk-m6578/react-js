import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
  return (
    <div className={c.posts}>
      <Post message='Hi, how are you?' count='0' />
      <Post message='This is my first project.' count='63' />
      <Post message='Happy birthday to me!!!!' count='127' />
    </div>
  );
}

export default Posts;