import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import LogInForm from './components/LogInForm.js';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Auth from './pages/Auth.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/> } /> //default page
        <Route path='/home' element={ <Home/> } />
        <Route path='/auth' element={ <Auth/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
