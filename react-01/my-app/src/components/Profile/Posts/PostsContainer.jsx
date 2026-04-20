// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';  
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profilePageReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPost())},
    updateNewPostText: (text) => {dispatch(updateNewPostText(text))}
  }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;