import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsPageReducer';
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {

  // let state = props.store.getState().dialogsPage;

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let onAddMessage = () => {
            store.dispatch(addMessageActionCreator());
          }

          let onUpdateNewMessageText = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
          }
          return (
            <Dialogs dialogsPage={store.getState().dialogsPage} addMessage={onAddMessage} updateNewMessageText={onUpdateNewMessageText} />
          );
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;