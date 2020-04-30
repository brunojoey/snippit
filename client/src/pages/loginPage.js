import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Signup from '../components/signup';
import LoginComponent from '../components/login';
import statusAPI from '../utils/statusAPI';

function Login(props) {
  

  return(
    <div>
      <LoginComponent></LoginComponent>
      <Signup></Signup>
    </div>
  );
}

export default Login;
