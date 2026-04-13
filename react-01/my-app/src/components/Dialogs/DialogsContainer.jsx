import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsPageReducer';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onUpdateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Dialogs dialogsPage={state} addMessage={onAddMessage} updateNewMessageText={onUpdateNewMessageText} />
  );
}

export default DialogsContainer;