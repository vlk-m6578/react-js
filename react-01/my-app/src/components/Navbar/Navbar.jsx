import c from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <a href='#'>Profile</a>
      <a href='#'>Messages</a>
      <a href='#'>Main</a>
      <a href='#'>Settings</a>
    </nav>
  );
}

export default Navbar;