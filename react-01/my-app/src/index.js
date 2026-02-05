import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', count: 0 },
  { id: 2, message: 'This is my first project.', count: 63 },
  { id: 3, message: 'Happy birthday to me!!!!', count: 127 }
];

let dialogs = [
  { id: 1, name: 'Dzmitry' },
  { id: 2, name: 'Kate' },
  { id: 3, name: 'Milana' },
  { id: 4, name: 'Vova' }
];

let messages = [
  { id: 1, message: 'Hello bro!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Wow!' },
  { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illum!' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
