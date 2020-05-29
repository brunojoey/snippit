import React, { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { TextInput, Row, Col, Button } from "react-materialize";
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';
import '../../pages/loginPage/style.css';

function Login() {
  const { status, updateStatus } = useContext(StatusContext);
  const [redirect, setRedirect] = useState(null);
  const [state, setState] = useState({
    username: '',
    password: '',
    message: ''
  });

  useEffect(() => {
    // Check redirect in hook to prevent react state update on unmounted object during submit.
    if (status.status !== false) {
      (status.message) ? setRedirect('/login') : setRedirect('/home');
    }

  }, [status]);

  function handleChange(event) {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value })
  }

  function handleClick() { setState({ ...state, message: '' }); }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await statusAPI.login(state);

    if (data.message) { setState({ ...state, message: data.message })}
    else { updateStatus(data); }
  }

  return (
    <form className='login-form'>
      {(redirect !== null ? <Redirect push to={redirect} /> : <></>)}
      <Row className='username-row'>
        <Col s={10} offset='s1'>
          <TextInput className='login-input' id='username' name='username' label='Username' noLayout onChange={handleChange} onClick={handleClick}/>
          {(state.message.includes('Username')) ? <div className='login-error'>{state.message}</div> : <></>}
        </Col>
      </Row>
      <Row style={{ transform: 'translateY(-20px)' }}>
        <Col s={10} offset='s1'>
          <TextInput password className='login-input' id='password' name='password' label='Password' noLayout onChange={handleChange} onClick={handleClick}/>
          {(state.message.includes('Password')) ? <div className='login-error'>{state.message}</div> : <></>}
        </Col>
      </Row>
      <button className='login-submit btn-rounded-light login-btn' type='submit' onClick={handleSubmit}>[ ...Submit ]</button>
    </form>
  );
}

export default Login;
