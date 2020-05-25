import React, { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { TextInput, Row, Col, Button } from "react-materialize";
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';
import ProfileImage from "../Cloudinary";
import '../../pages/loginPage/style.css';

function Login() {
  const { status, updateStatus } = useContext(StatusContext);
  const [redirect, setRedirect] = useState(null);
  const [message, setMessage] = useState('');
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    // Check redirect in hook to prevent react state update on unmounted object during submit.
    if (status.status !== false) {
      (status.message) ? setRedirect('/signup') : setRedirect('/home');
    }

  }, [status]);

  function handleChange(event) {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value })
  }

  function handleClick() { setMessage(''); }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const username = state.username;
    const password = state.password;
    let message = '';

    if (username.length < 8 || username.length > 20 || !username.match(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*.{8,20}/)) {
      message = 'Username must include the following:';
    } else {
      if (password.length < 8 || password.length > 20 || !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
        message = 'Password must include the following:';
      } else {
        statusAPI.signup(state)
          .then(async data => {
            const user = await statusAPI.login(state);
            updateStatus(user.data);
          })
          .catch(err => {
            console.log('SIGNUP ERROR');
          });
      }
    }

    setMessage(message);
  }

  return (
    <>
      <form className='login-form'>
        {(redirect !== null) ? <Redirect push to={redirect} /> : <></>}
        <Row className='username-row'>
          <Col s={10} offset='s1'>
            <TextInput className='login-input' id='username' name='username' label='Username' noLayout onChange={handleChange} onClick={handleClick}/>
            {(message.includes('Username')) 
              ? 
                <div className='login-error'>
                  <p className='login-error-message'>{message}</p>
                  <ul className='login-error-ul'>
                    <li className='login-error-li'>8-20 characters in length</li>
                    <li className='login-error-li'>Does not include most special characters</li>
                    <li className='login-error-li'>May include underscores and hyphens</li>
                    <li className='login-error-li'>Must begin and end with letter or numeric digit</li>
                  </ul>
                </div>
              : 
                <></>
            }
          </Col>
        </Row>
        <Row>
          <Col s={10} offset='s1'>
            <TextInput password className='login-input' id='password' name='password' label='Password' noLayout onChange={handleChange} onClick={handleClick}/>
            {(message.includes('Password')) 
              ? 
                <div className='login-error'>
                  <p className='login-error-message'>{message}</p>
                  <ul className='login-error-ul'>
                    <li className='login-error-li'>8-20 characters in length</li>
                    <li className='login-error-li'>At least 1 uppercase letter</li>
                    <li className='login-error-li'>At least 1 lowercase letter</li>
                    <li className='login-error-li'>At least 1 numeric digit</li>
                  </ul>
                </div>
              : 
                <></>
            }
          </Col>
        </Row>
        <button className='login-submit btn-rounded red-btn' style={{ width: '96px' }} type='submit' onClick={handleSubmit}>[ ...Submit ]</button>
      </form>
    </>
  );
}

export default Login;
