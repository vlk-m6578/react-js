import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} />);

  return (
    <div className={c.posts}>
      {postsElements}
    </div>
  );
}

export default Posts;