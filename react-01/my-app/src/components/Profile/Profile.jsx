import Posts from './Posts/Posts.jsx';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default Profile;