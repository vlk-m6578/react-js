import c from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <a href='/profile' className={c.active}>Profile</a>
      <a href='/messages'>Messages</a>
      <a href='/news'>News</a>
      <a href='/music'>Music</a>
      <a href='/settings'>Settings</a>
    </nav>
  );
}

export default Navbar;