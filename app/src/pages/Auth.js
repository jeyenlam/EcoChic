import React from 'react';
import LogInForm from '../components/LogInForm.js';
import Navbar from '../components/Navbar.js';
import SignUpForm from '../components/SignUpForm.js';

const Auth = ({ authType }) => {
  return (
    <div className='auth'>
      <Navbar />
      <div className='auth-page page-content'>
        {authType === 'login' ? <LogInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default Auth;
