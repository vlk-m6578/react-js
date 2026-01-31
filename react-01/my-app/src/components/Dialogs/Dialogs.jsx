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
  return (
    <div className={c.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: 'Dzmitry' },
    { id: 2, name: 'Kate' },
    { id: 3, name: 'Milana' },
    { id: 4, name: 'Vova' }
  ];

  let messagesData = [
    { id: 1, message: 'Hello bro!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Wow!' },
    { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!' }
  ];

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={c.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
}

export default Dialogs;