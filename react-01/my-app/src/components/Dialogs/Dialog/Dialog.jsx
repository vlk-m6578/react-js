import c from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <div className={`${c.dialogs__item} ${c.dialogs__item__active}`}>
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;