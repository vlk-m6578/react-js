import Post from './Post/Post';
import c from './Posts.module.css';
import React from 'react';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
      <button onClick={addPost}>Add post</button>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;