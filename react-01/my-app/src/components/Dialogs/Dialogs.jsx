import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} />);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

  let onAddMessage = () => {
    // props.dispatch(addMessageActionCreator());
    props.addMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    // props.dispatch(updateNewMessageTextActionCreator(text));
    props.updateNewMessageText(text);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;