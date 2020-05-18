import React, { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { TextInput, Row, Col, Button } from "react-materialize";
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';

function Login() {
  const { status, updateStatus } = useContext(StatusContext);
  const [redirect, setRedirect] = useState(null);
  const [state, setState] = useState({
    username: '',
    password: ''
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
  
  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await statusAPI.login(state);
    // Update status. This will change StatusContext from falsy object to user object.
    updateStatus(data);
  }

  return (
    <form>
      {(redirect !== null ? <Redirect push to={redirect} /> : <></>)}
      <Row>
        <Col s={10} offset='s1'>
          <TextInput id='username' name='username' label='Username' noLayout onChange={handleChange}/>
        </Col>
      </Row>
      <Row>
        <Col s={10} offset='s1'>
          <TextInput password id='password' name='password' label='Password' noLayout onChange={handleChange}/>
        </Col>
      </Row>
      <Button node='button' type='submit' waves='light' onClick={handleSubmit}>Submit</Button>
    </form>
  );
}

export default Login;
