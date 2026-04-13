import Post from './Post/Post';
import c from './Posts.module.css';
import React from 'react';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import { addPost, updateNewPostText } from '../../../redux/profilePageReducer';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.dispatch(addPost()); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostText(text));
  }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
      <button onClick={onAddPost}>Add post</button>
      <div className={c.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;