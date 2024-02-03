import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Auth from './pages/Auth.js';
import Stores from './pages/Stores.js';
import About from './pages/About.js';
import Intro from './pages/Intro.js';
import SignUpForm from './components/SignUpForm.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Intro/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/auth' element={ <Auth/> } />
        <Route path='/stores' element={ <Stores/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/signUp' element={ <SignUpForm/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
