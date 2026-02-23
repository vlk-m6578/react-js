import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewPostText } from './redux/state';
import { updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
}