import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs
    .map(d => <Dialog id={d.id} name={d.name} />);

  let messagesElements = props.messages.map( m => <Message message={m.message} />);

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