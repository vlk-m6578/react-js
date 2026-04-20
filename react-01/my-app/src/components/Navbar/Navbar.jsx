import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to='/profile' className={({ isActive }) => {
        return isActive ? `${styles.active}` : `${styles.link}`;
      }}>Profile</NavLink>
      <NavLink to='/messages' className={({ isActive }) => {
        return isActive ? `${styles.active}` : `${styles.link}`;
      }} >Messages</NavLink>
      <NavLink to='/news' className={({ isActive }) => {
        return isActive ? `${styles.active}` : `${styles.link}`;
      }} >News</NavLink>
      <NavLink to='/music' className={({ isActive }) => {
        return isActive ? `${styles.active}` : `${styles.link}`;
      }} >Music</NavLink>
      <NavLink to='/settings' className={object => object.isActive ? `${styles.link} ${styles.active}` : styles.link}>Settings</NavLink>
    </nav>
  );
}

export default Navbar;