import Posts from './Posts/Posts.jsx';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
}

export default Profile;