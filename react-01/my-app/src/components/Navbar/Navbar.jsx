import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <NavLink to='/profile' className={({ isActive }) => {
        return isActive ? `${c.active}` : `${c.link}`;
      }}>Profile</NavLink>
      <NavLink to='/messages' className={({ isActive }) => {
        return isActive ? `${c.active}` : `${c.link}`;
      }} >Messages</NavLink>
      <NavLink to='/news' className={({ isActive }) => {
        return isActive ? `${c.active}` : `${c.link}`;
      }} >News</NavLink>
      <NavLink to='/music' className={({ isActive }) => {
        return isActive ? `${c.active}` : `${c.link}`;
      }} >Music</NavLink>
      <NavLink to='/settings' className={({ isActive }) => {
        return isActive ? `${c.active}` : `${c.link}`;
      }} >Settings</NavLink>
    </nav>
  );
}

export default Navbar;