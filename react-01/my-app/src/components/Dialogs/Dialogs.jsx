import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Dzmitry' },
    { id: 2, name: 'Kate' },
    { id: 3, name: 'Milana' },
    { id: 4, name: 'Vova' }
  ];

  let dialogsElements = dialogs
    .map(d => <Dialog id={d.id} name={d.name} />);

  let messages = [
    { id: 1, message: 'Hello bro!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Wow!' },
    { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!' }
  ];

  let messagesElements = messages.map( m => <Message message={m.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;