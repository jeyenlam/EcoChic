import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Auth from './pages/Auth';
import Stores from './pages/Stores';
import About from './pages/About';
import Intro from './pages/Intro';
import SignUpForm from './components/SignUpForm'

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
