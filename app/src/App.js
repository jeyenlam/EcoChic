import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Auth from './pages/Auth.js';
import Stores from './pages/Stores.js';
import About from './pages/About.js';
import Intro from './pages/Intro.js';
import SignUpForm from './components/SignUpForm.js';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Intro/> } />
        <Route path='/home/:userId' element={ <Home/> } />
        <Route path='/auth/' element={ <Auth authType='login'/> } />
        <Route path='/auth/signup/' element={ <Auth authType='signup'/> } />
        <Route path='/stores/:userId' element={ <Stores/> } />
        <Route path='/stores/:userId/:id' element={ <Store/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
