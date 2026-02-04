import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', count: 0 },
    { id: 2, message: 'This is my first project.', count: 63 },
    { id: 3, message: 'Happy birthday to me!!!!', count: 127}
  ];

  let postsElements = posts.map(p => <Post message={p.message} count={p.count} />);

  return (
    <div className={c.posts}>
      {postsElements}
    </div>
  );
}

export default Posts;