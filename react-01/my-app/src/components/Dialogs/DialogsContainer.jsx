import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsPageReducer';
import StoreContext from '../../storeContext';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(addMessageActionCreator())},
    updateNewMessageText: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;