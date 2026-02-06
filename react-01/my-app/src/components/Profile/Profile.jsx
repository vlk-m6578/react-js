import Posts from './Posts/Posts';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <Posts posts={props.state.posts} />
    </div>
  );
}

export default Profile;