import PostsContainer from './Posts/PostsContainer.jsx';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;