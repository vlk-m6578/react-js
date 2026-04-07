import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  debugger;
  return (
    <BrowserRouter>
      <div className="content-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Navigate to='/profile' replace />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch = {props.dispatch} />} />
            <Route path='/messages' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
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
