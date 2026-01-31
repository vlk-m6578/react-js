import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        <div className={`${c.dialogs__item} ${c.dialogs__item__active}`}>
          <NavLink to='/messages/1'>Dzmitry</NavLink>
        </div>
        <div className={c.dialogs__item}>
          <NavLink to='/messages/2'>Kate</NavLink>
        </div>
        <div className={c.dialogs__item}>
          <NavLink to='/messages/3'>Milana</NavLink>
        </div>
        <div className={c.dialogs__item}>
          <NavLink to='/messages/4'>Vova</NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hello bro!</div>
        <div className={c.message}>How are you?</div>
        <div className={c.message}>Wow!</div>
        <div className={c.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!</div>
      </div>
    </div>
  );
}

export default Dialogs;