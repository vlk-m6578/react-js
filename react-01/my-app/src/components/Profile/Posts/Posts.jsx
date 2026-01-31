import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {

  let postsData = [
    { id: 1, message: 'Hi, how are you?', count: 0 },
    { id: 2, message: 'This is my first project.', count: 63 },
    { id: 3, message: 'Happy birthday to me!!!!', count: 127}
  ];

  return (
    <div className={c.posts}>
      <Post message={postsData[0].message} count={postsData[0].count} />
      <Post message={postsData[1].message} count={postsData[1].count} />
      <Post message={postsData[2].message} count={postsData[2].count} />
    </div>
  );
}

export default Posts;