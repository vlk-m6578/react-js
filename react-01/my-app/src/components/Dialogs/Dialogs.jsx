import c from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs
    .map(d => <Dialog id={d.id} name={d.name} />);

  let messagesElements = props.state.messages.map( m => <Message message={m.message} />);

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs__list}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        {messagesElements}
      </div> 
      <div className={c.add}>
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
}

export default Dialogs;