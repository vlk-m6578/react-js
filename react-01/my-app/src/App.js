import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="content-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost = {props.addPost} updateNewPostText={props.updateNewPostText} />} />
            <Route path='/messages' element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} />} />
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/' element={<Profile profilePage={props.state.profilePage} />}/>
          </Routes>
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
