import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';

const Dialog = (props) => {
  return (
    <div className={`${c.dialogs__item} ${c.dialogs__item__active}`}>
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return(
    <div className={c.message}>{props.message}</div>
  );
}

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        <Dialog name='Dzmitry' id='1' />
        <Dialog name='Kate' id='2' />
        <Dialog name='Milana' id='3' />
        <Dialog name='Vova' id='4' />
      </div>
      <div className={c.messages}>
        <Message message='Hello bro!' />
        <Message message='How are you?' />
        <Message message='Wow!' />
        <Message message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!' />
      </div>
    </div>
  );
}

export default Dialogs;