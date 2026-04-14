// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import { addPost, updateNewPostText } from '../../../redux/profilePageReducer';
import StoreContext from '../../../storeContext';
import Posts from './Posts';

const PostsContainer = (props) => {

  // let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let onAddPost = () => {
            store.dispatch(addPost());
          }

          let onPostChange = (text) => {
            store.dispatch(updateNewPostText(text));
          }
          return (
            <Posts posts={store.getState().profilePage.posts} newPostText={store.getState().profilePage.newPostText} addPost={onAddPost} updateNewPostText={onPostChange} />
          );
        }
      }
    </StoreContext.Consumer>
  );
}

export default PostsContainer;