import Posts from './Posts/Posts';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <Posts />
    </div>
  );
}

export default Profile;