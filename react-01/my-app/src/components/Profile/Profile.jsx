import PostsContainer from './Posts/PostsContainer.jsx';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostsContainer  />
    </div>
  );
}

export default Profile;