// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import { addPost, updateNewPostText } from '../../../redux/profilePageReducer';
import Posts from './Posts';

const PostsContainer = (props) => {

  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPost()); 
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostText(text));
  }

  return (
    <Posts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={onAddPost} updateNewPostText={onPostChange} />
  );
}

export default PostsContainer;